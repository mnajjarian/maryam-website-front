require('dotenv').config();
const express = require('express');
const http = require('http');
const next = require('next');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const uid = require('uid-safe');
const authRoutes = require('./auth-routes.ts');
const blogAPI = require('./api.ts');

const devProxy = {
  '/.netlify': {
    target: 'http://localhost:9000',
    pathRewrite: { '^/.netlify/functions': '' },
  },
};

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  dir: './src',
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  if (dev && devProxy) {
    const proxyMiddleware = require('http-proxy-middleware');
    Object.keys(devProxy).forEach(function(context) {
      server.use(proxyMiddleware(context, devProxy[context]));
    });
  }
  const sessionConfig = {
    secret: uid.sync(18),
    cookie: {
      maxAge: 86400 * 1000, // 24 hours in milliseconds
    },
    resave: false,
    saveUninitialized: true,
  };

  server.use(session(sessionConfig));

  const auth0Strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL,
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile);
    },
  );

  passport.use(auth0Strategy);
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  server.use(passport.initialize());
  server.use(passport.session());
  server.use(authRoutes);

  server.use(blogAPI);

  const restrictAccess = (req, res, next) => {
    if (!req.isAuthenticated()) return res.redirect('/login');
    next();
  };

  server.use('/dashboard', restrictAccess);

  server.get('*', handle);

  http.createServer(server).listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
  });
});
