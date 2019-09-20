type Props = {
  posts: {
    id: string;
    title: string;
    text: string[];
    imgUrl: string;
    createdAt: string;
  };
};
const BlogHeader = (props: Props) => {
  const {
    posts: { title, text, imgUrl, createdAt }
  } = props;
  return (
    <div className="blog__header">
      <div className="header__content">
        <div className="header__items">
          <h2>{title}</h2>
          <p>
            {text[0].substring(0, 350)}...<a href="/">read more</a>
          </p>
          <span>{createdAt}</span>
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
        h2 {
          text-transform: capitalize;
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
