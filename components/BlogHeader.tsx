type Paragraph = {
  title: string;
  text: string[];
};
type Props = {
  posts: {
    id: string;
    title: string;
    paragraph: Paragraph[];
    imgUrl: string;
    createdAt: string;
  };
};
const BlogHeader = (props: Props) => {
  const {
    posts: { title, paragraph, imgUrl, createdAt }
  } = props;
  return (
    <div className="blog__header">
      <div className="header__content">
        <div className="header__items">
          <h2>{title}</h2>
          <p>{paragraph[0].text[0].substring(0, 350)}...</p>
          <span>
            {new Intl.DateTimeFormat("en-us", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(createdAt))}
          </span>
        </div>
        <img src="../static/images/tech-image.jpg" alt="tech" />
      </div>
      <style jsx>{`
        .blog__header {
          display: flex;
          width: 100%;
          height: 80vh;
          background-color: var(--blog-bg-color);
        }
        .header__content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px;
        }
        .header__items {
          display: flex;
          flex-direction: column;
          margin-right: 20px;
          //width: 50%;
        }
        .header__items > h2 {
          margin: 0;
        }
        .header__items > p {
          font-size: 1.1rem;
          line-height: 200%;
        }
        h2 > a {
          text-transform: capitalize;
          color: black;
        }
        a {
          text-decoration: none;
        }

        .header__top {
          display: flex;
          justify-content: space-between;
          //align-items: center;
          width: 100%;
        }
        img {
          width: 100%;
          height: 350px;
        }
        @media (max-width: 768px) {
          .blog__header {
            height: 100vh;
          }
          .header__content {
            flex-direction: column-reverse;
            justify-content: space-around;
          }
          .header__img {
            width: 100%;
          }

          img {
            height: 200px;
          }
          .header__items {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogHeader;
