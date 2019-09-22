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
          <h2>
            <a href="/">{title}</a>
          </h2>
          <p>{paragraph[0].text[0].substring(0, 350)}...</p>
          <span>
            {new Intl.DateTimeFormat("en-us", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(createdAt))}
          </span>
        </div>
        <div className="header__img">
          <img src="../static/images/tech-image.jpg" alt="tech" />
        </div>
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
          width: 50%;
        }
        h2 > a {
          text-transform: capitalize;
          color: black;
        }
        a {
          text-decoration: none;
        }

        .header__img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
        }
        img {
          width: 100%;
          height: 350px;
        }
      `}</style>
    </div>
  );
};

export default BlogHeader;
