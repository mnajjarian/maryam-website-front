import Link from "next/link";
import { string } from "prop-types";

type Paragraph = {
  title: string;
  text: string[];
};

type PostProps = {
  post: {
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
            {post.paragraph[0].text[0].substring(0, 380) + "... "}
            <Link
              href="/blog/[id]"
              as={`/blog/${post.title.split(" ").join("-")}`}
            >
              <a>read more</a>
            </Link>
          </p>
          <img src={post.imgUrl} alt={post.title} />
        </div>
        <span>
          <ul className="tags">
            Tags:{" "}
            {post.tags.map(tag => (
              <li key={tag}>
                <a href="/">{tag}</a>
              </li>
            ))}
          </ul>
        </span>
      </div>
      <style jsx>{`
        section {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px 20px;
        }
        section:not(:last-of-type) {
          border-bottom: 1px solid #ffbb73;
        }
        .blog__items {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .blog__items > p {
          font-size: 1.1rem;
          line-height: 200%;
        }
        .blog__items > img {
          width: 300px;
          height: 200px;
        }
        p > a {
          text-decoration: none;
          font-size: 1.2rem;
          color: var(--light-french);
        }
        p > a:hover {
          color: #484848;
        }
        h2 {
          color: black;
        }
        span {
          color: var(--dark-light);
        }
        .tags {
          display: flex;
          list-style: none;
          margin: 0;
          overflow: hidden;
          padding: 0;
        }
        .tags li {
          float: left;
        }
        .tags li > a {
          background-color: #eee;
          border-radius: 3px 0 0 3px;
          color: #999;
          display: inline-block;
          height: 26px;
          padding: 0 20px 0 23px;
          position: relative;
          margin: 0 10px 10px 0;
          text-decoration: none;
          -webkit-transition: color 0.2s;
        }
        .tags li > a:before {
          position: absolute;
          height: 6px;
          width: 6px;
          left: 10px;
          top: 10px;
          content: "";
          background: #fff;
          border-radius: 10px;
          box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        }
        .tags li > a:after {
          position: absolute;
          content: "";
          right: 0;
          top: 0;
          background: #fff;
          border-bottom: 13px solid transparent;
          border-left: 10px solid #eee;
          border-top: 13px solid transparent;
        }
        .tags li > a:hover {
          background-color: crimson;
          color: white;
        }
        .tags li > a:hover::after {
          border-left-color: crimson;
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
