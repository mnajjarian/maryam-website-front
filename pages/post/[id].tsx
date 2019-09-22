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

  const handleClick = () => {
    return null;
  };
  console.log(post);
  return (
    <main>
      <Meta />
      <Navbar links={links} />
      <section className="post">
        <header>
          <div className="post__date">
            <time>
              Published on{" "}
              {new Intl.DateTimeFormat("en-us", {
                year: "numeric",
                month: "long",
                day: "2-digit"
              }).format(new Date(post.createdAt))}
            </time>
          </div>
          <h1>{post.title}</h1>
          <div className="post__author">
            <div className="author__image">
              <img src={post.authorImg} alt="author image" />
            </div>
            <div className="author__name">
              <p>
                Written by:
                <br />
                <strong>{post.author}</strong>
              </p>
            </div>
          </div>
          <div className="post__short">
            <p>{post.shortDescription}</p>
          </div>
          <div className="post__image">
            <img src={post.imgUrl} />
          </div>
        </header>
        <article>
          <div className="post__body">
            {post.paragraph.map(p => (
              <div>
                <h2>{p.title}</h2>
                {p.text.map(text => (
                  <p>{text}</p>
                ))}
              </div>
            ))}
          </div>
        </article>
        <footer>
          <div className="footer__contents">
            <h2>About the author</h2>
            <div className="footer__profile">
              <div className="profile__image">
                <img src={post.authorImg} alt="author image" />
              </div>
              <div className="profile__text">
                <p>
                  <strong>{post.author}</strong>
                </p>
                <p></p>
                <p>{post.authorBio}</p>
              </div>
            </div>
          </div>
          <div className="social__share">
            <span>Share the blog post:</span>
            <a onClick={handleClick}>
              <img
                src="../../static/icons/facebook-2.svg"
                alt="facebook icon"
              />
            </a>
            <a href="/">
              <img src="../../static/icons/inkedin-2.svg" alt="linkedin icon" />
            </a>
            <a href="/">
              <img src="../../static/icons/twitter-2.svg" alt="twitter icon" />
            </a>
            <div className="blog__spc"></div>
          </div>
        </footer>
      </section>
      <style jsx>{`
        main {
          background-color: #f9f9f9;
        }
        section {
          margin-top: 80px;
          font-family: Merriweather, serif;
          color: #484848;
        }

        article, footer, header {
          max-width: 960px;
          width: 100%;
          margin 0 auto;
          padding: 0 1rem;
        }
        .blog__spc {
          width: 100%;
          padding: .5rem 0;
        }
        .post__date {
          margin-top: 0.25rem;
          margin-bottom: 1rem;
          font-family: "Lato", sans-serif;
          font-weight: bold;
          font-size: 1.2rem;
          color: var(--main-bg-color);
        }
        .post__author {
          display: flex;
          align-items: center;
          margin: 1rem 0;
          height: auto;
          width: 100%;
        }
        .post__image > img {
          width: 100%;
          height: auto;
        }
        .author__image > img {
          width: 70px;
          height: 70px;
          margin: 0.25rem;
          border-radius: 50%;
        }

        .author__name {
          display: flex;
          flex-direction: column;
          margin: 0 0.25rem;
        }
        .post__short {
          width: 100%;
          margin: 0.25rem 0 0.5rem 0;
        }
        .post__short > p {
          font-size: 1.25rem;
          font-weight: 800;
        }
        .post__body {
          margin: 0;
          max-width: 100%;
        }
        section > p {
          font-size: 1.1rem;
          font-weight: 300 !important;
          line-height: 200%;

        }
        .footer__contents {
          width: 80%;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .footer__contents > p {
          font-size: 1rem;
        }
        .footer__profile {
          margin-top: 1rem;
          margin-bottom: 1rem;
          height: auto;
          width: 100%;
        }
        .profile__image {
         width: 120px;
         height: 120px;
         margin: .25rem auto 1rem;
        }
        .profile__image > img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        .profile__text {
          width: 60%;
          margin: 0 auto;
        }
   
        .profile__text > p:nth-child(1) {
          text-align: center;
        }
        .footer__contents > h2 {
          text-align: center;
        }
        .social__share {
          text-align: center;
          width: 100%;
          padding: .5rem 0;
          font-family: 'Lato',sans-serif;
        }
        .social__share > span {
          color: #484848;
          font-size: 1.15rem;
          font-weight: 600;
          vertical-align: middle;
        }
        .social__share > a {
          margin: 0 .25rem;
        }
        h1 {
          font-size: 2.5rem;
          word-wrap: break-word;
        }
        h2 {
          font-size: 2rem;
        }
        p {
 
          line-height: 200%;
          font-size: 1.1rem;
        }
        strong {
          text-transform: capitalize;
        }
      `}</style>
    </main>
  );
}
