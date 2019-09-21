import { useRouter } from "next/router";
import BlogPost from "../../components/BlogPost";
import Post from "../../components/Post";
import db from "../../db.json";
import Navbar from "../../components/Navbar";
import Meta from "../../components/meta";

export default function() {
  const router = useRouter();
  const {
    query: { id }
  } = router;
  if (!id) {
    return <div></div>;
  }
  const { posts } = db;
  const title: string = id
    .toString()
    .split("-")
    .join(" ");
  const post = posts.find(p => p.title === title);
  const links = [{ title: "home", href: "/" }];
  console.log(post);
  return (
    <div>
      <Meta />
      <Navbar links={links} />
      <h2>{post.title}</h2>
      <style jsx>{`
        h2 {
          color: black;
        }
      `}</style>
    </div>
  );
}
