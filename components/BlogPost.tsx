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
  const formatDate = date =>
    new Intl.DateTimeFormat("en-us", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    }).format(new Date(date));
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
              <div className="post__header">
                <span className="header__icon">
                  <img src="../static/icons/time-3.svg" alt="clock icon" />
                  <strong>
                    <time dateTime="2019-09-12" itemProp={p.createdAt}>
                      {formatDate(p.createdAt)}
                    </time>
                  </strong>
                </span>
                <span className="header__icon">
                  <img src="../static/icons/user.svg" alt="user icon" />
                  <strong>{p.author}</strong>
                </span>
                <span className="header__icon">
                  <img src="../static/icons/bubble.svg" alt="comment icon" />
                  <strong>3</strong>
                </span>
              </div>

              <p>{p.text[0]}</p>
              <span>
                Tags:{" "}
                {p.tags.map(tag => (
                  <strong>
                    <a href="/">{tag}</a>,
                  </strong>
                ))}
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
          width: 300px;
          height: 200px;
          padding-left: 10px;
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
          //justify-content: center;
          align-items: center;
          margin-right: 8px;
        }
        .header__icon > img {
          height: 25px;
          width: 25px;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
