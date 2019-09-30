import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import Navbar from '../components/Navbar';
import Meta from '../components/meta';
import BlogHeader from '../components/BlogHeader';
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';

const links = [
  { title: 'Home', href: '/blog' },
  { title: 'About', href: '/about' },
];
const Blog = ({ posts }) => (
  <React.Fragment>
    <Meta />
    <Navbar links={links} />
    <BlogHeader posts={posts.posts[0]} />
    <BlogPost posts={posts.posts} />
    <Footer />
  </React.Fragment>
);

Blog.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const res = await fetch(`${baseUrl}/api/posts`);
  return {
    posts: await res.json(),
  };
};
export default Blog;
