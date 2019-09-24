import * as React from "react";
import Navbar from "../components/Navbar";
import Meta from "../components/meta";
import BlogHeader from "../components/BlogHeader";
import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";
import post from "../db.json";

const links = [
  { title: "Home", href: "/blog" },
  { title: "About", href: "/about" }
];
const Blog = () => (
  <React.Fragment>
    <Meta />
    <Navbar links={links} />
    <BlogHeader posts={post.posts[0]} />
    <BlogPost posts={post.posts} />
    <Footer />
  </React.Fragment>
);

export default Blog;
