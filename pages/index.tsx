import Navbar from "../components/Navbar";
import Meta from "../components/meta";
import BlogHeader from "../components/BlogHeader";
import BlogPost from "../components/BlogPost";
import post from "../db.json";
import Footer from "../components/Footer";

const links = [{ title: "about me", href: "/about" }];
const Blog = () => (
  <div className="blog">
    <Meta />
    <Navbar links={links} />
    <BlogHeader posts={post.posts[0]} />
    <BlogPost posts={post.posts} />
    <Footer />
  </div>
);

export default Blog;
