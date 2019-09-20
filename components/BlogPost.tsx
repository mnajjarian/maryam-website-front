type Props = {
  posts: {
    id: string;
    author: string;
    title: string;
    text: Array<string>;
    imgUrl: string;
    createdAt: string;
  }[];
};
const BlogPost = (props: Props) => {
  const { posts } = props;
  return (
    <div className="blog__post">
      <div className="blog__aside">
        <aside>hh</aside>
      </div>
      <div className="blog__posts">
        {posts.map(p => (
          <section>
            <div className="post__content">
              <h2>{p.title}</h2>
              <p>{p.text[0]}</p>
              <span>
                {p.createdAt} {" By "} <strong>{p.author}</strong>
              </span>
            </div>
            <img src={p.imgUrl} alt={p.title} />
          </section>
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
          padding: 20px 50px;
          border-bottom: 1px solid #ffbb73;
        }
        img {
          float: left;
          width: 300px;
          height: 200px;
          padding-left: 10px;
        }

        h2,
        span {
          color: black;
        }
        strong {
          text-transform: capitalize;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
