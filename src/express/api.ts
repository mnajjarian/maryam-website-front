const bodyParser = require('body-parser');
const router = require('express').Router();

router.use(bodyParser.json());

const posts = require('../db.json');

router.get('/api/posts', (req, res) => {
  res.send(posts);
});

module.exports = router;
