import Link from "next/link";
import Post from "./Post";

type Props = {
  posts: {
    id: string;
    author: string;
    title: string;
    text: Array<string>;
    imgUrl: string;
    tags: string[];
    createdAt: string;
  }[];
};

const BlogPost = (props: Props) => {
  const { posts } = props;

  return (
    <div className="blog__post">
      <div className="blog__aside">
        <aside></aside>
      </div>
      <div className="blog__posts">
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
      <style jsx>{`
        .blog__post {
          display: flex;
          flex-direction: row-reverse;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          background-color: #fdfff7;
        }
        .blog__aside {
          width: 30%;
          height: auto;
          background-color: #ffbb73;
        }
        .blog__posts {
          width: 70%;
          height: 100%;
        }
        section {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px 20px;
          border-bottom: 1px solid #ffbb73;
        }
        .blog__items {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .blog__items > img {
          width: 300px;
          height: 200px;
        }

        h2 {
          color: black;
        }
        span {
          color: var(--dark-light);
        }
        strong {
          text-transform: capitalize;
          font-weight: bold;
          padding: 5px;
        }
        .post__header {
          color: var(--dark-light);
          display: flex;
          //justify-content: center;
          align-items: center;
        }
        .header__icon {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 8px;
        }
        .header__icon > img {
          height: 15px;
          width: 15px;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
