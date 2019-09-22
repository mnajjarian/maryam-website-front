import Link from "next/link";
import Post from "./Post";

type Paragraph = {
  title: string;
  text: string[];
};
type Props = {
  posts: {
    id: string;
    author: string;
    authorImg: string;
    authorBio: string;
    title: string;
    shortDescription: string;
    paragraph: Paragraph[];
    imgUrl: string;
    tags: string[];
    createdAt: string;
  }[];
};

const BlogPost = (props: Props) => {
  const { posts } = props;

  return (
    <div className="blog__post">
      <div className="blog__posts">
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
      <style jsx>{`
        .blog__post {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          background-color: #fdfff7;
        }
        .blog__posts {
          width: 70%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
