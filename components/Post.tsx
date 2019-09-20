import Link from "next/link";

type PostProps = {
  post: {
    id: string;
    author: string;
    title: string;
    text: Array<string>;
    imgUrl: string;
    tags: string[];
    createdAt: string;
  };
};
const Post = (props: PostProps) => {
  const formatDate = date =>
    new Intl.DateTimeFormat("en-us", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    }).format(new Date(date));
  const { post } = props;

  return (
    <section>
      <div className="post__content">
        <h2>{post.title}</h2>
        <div className="post__header">
          <span className="header__icon">
            <img src="../static/icons/time-3.svg" alt="clock icon" />
            <strong>
              <time dateTime="2019-09-12" itemProp={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </strong>
          </span>
          <span className="header__icon">
            <img src="../static/icons/user.svg" alt="user icon" />
            <strong>{post.author}</strong>
          </span>
          <span className="header__icon">
            <img src="../static/icons/bubble.svg" alt="comment icon" />
            <strong>3 Comments</strong>
          </span>
        </div>
        <div className="blog__items">
          <p>
            {post.text[0].substring(0, 380)}...
            <Link
              href="/post/[id]"
              as={`/post/${post.title.split(" ").join("-")}`}
            >
              <a>read more</a>
            </Link>
          </p>
          <img src={post.imgUrl} alt={post.title} />
        </div>
        <span>
          Tags:{" "}
          {post.tags.map(tag => (
            <strong key={tag}>
              <a href="/">{tag}</a>,
            </strong>
          ))}
        </span>
      </div>
      <style jsx>{`
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
    </section>
  );
};

export default Post;
