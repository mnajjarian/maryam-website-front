import BlogNavbar from "../components/BlogNavbar";
import Meta from "../components/meta";
import BlogHeader from "../components/BlogHeader";
import BlogPost from "../components/BlogPost";
import post from "../db.json";

const Blog = () => (
  <div className="blog">
    <Meta />
    <BlogNavbar />
    <BlogHeader posts={post.posts[0]} />
    <BlogPost posts={post.posts} />
  </div>
);

export default Blog;
