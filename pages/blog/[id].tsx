import { useRouter } from "next/router";
import BlogPost from "../../components/BlogPost";
import Post from "../../components/Post";
import db from "../../db.json";
import Navbar from "../../components/Navbar";
import Meta from "../../components/meta";
import Footer from "../../components/Footer";
import { Fragment } from "react";

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
  const links = [{ title: "home", href: "/blog" }];

  const handleClick = () => {
    return null;
  };
  console.log(post);
  return (
    <main>
      <Meta />
      <div className="nav__wrapper">
        <Navbar links={links} />
      </div>
      <article>
        <header>
          <time>
            Published on{" "}
            {new Intl.DateTimeFormat("en-us", {
              year: "numeric",
              month: "long",
              day: "2-digit"
            }).format(new Date(post.createdAt))}
          </time>
          <h1>{post.title}</h1>
          <div className="post__author">
            <img src={post.authorImg} alt="author image" />
            <p>
              Written by:
              <br />
              <strong>{post.author}</strong>
            </p>
          </div>
          <p>{post.shortDescription}</p>
          <img src={post.imgUrl} />
        </header>
        {post.paragraph.map(p => (
          <Fragment>
            <h2>{p.title}</h2>
            {p.text.map(text => (
              <p>{text}</p>
            ))}
          </Fragment>
        ))}
        <footer>
          <section>
            <h2>About the author</h2>
            <img src={post.authorImg} alt="author image" />
            <p>
              <strong>{post.author}</strong>
            </p>
            <p></p>
            <p>{post.authorBio}</p>
          </section>
          <div className="social__share">
            <span>Share the blog post</span>
            <div className="social__buttons">
              <div className="facebook__icon"></div>
              <div className="linkedin__icon"></div>
              <div className="twitter__icon"></div>
            </div>
            <div className="blog__spc"></div>
          </div>
        </footer>
      </article>
      <div className="related__posts">
        <h2>Related blog posts</h2>
        <span></span>
        <div className="card__wrapper">
          <ul>
            <li>
              <img src={post.imgUrl} />
              <p>{post.title}</p>
            </li>
            <li>
              <img src={post.imgUrl} />
              <p>{post.title}</p>
            </li>
            <li>
              <img src={post.imgUrl} />
              <p>{post.title}</p>
            </li>
            <li>
              <img src={post.imgUrl} />
              <p>{post.title}</p>
            </li>
            <li>
              <img src={post.imgUrl} />
              <p>{post.title}</p>
            </li>
            <li>
              <img src={post.imgUrl} />
              <p>{post.title}</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .nav__wrapper {
          height: 50px;
        }
        main {
          background-color: #f9f9f9;
        }
        main > article {
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
        header > img {
          width: 100%;
        }
        time {
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

        .post__author > img {
          width: 70px;
          height: 70px;
          margin: 0.25rem;
          border-radius: 50%;
        }

        header > p {
          width: 100%;
          margin: 0.25rem 0 0.5rem 0;
          font-size: 1.25rem;
          font-weight: 800;
        }

        footer > section {
          text-align: center;
          width: 80%;
          margin: 0 auto;
          padding: 0 1rem;
        }
    
        section > p {
          text-align: left;
          font-size: 1.1rem;
        }
        section > p:nth-child(3) {
          margin-bottom: .6rem;
          text-align: center;
        }
        section > img {
         width: 120px;
         height: 120px;
         margin: .25rem auto 1rem;
        border-radius: 50%;
        }

        section > p {
          width: 60%;
          margin: 0 auto;
        }
   
        .social__share {
          text-align: center;
          width: 100%;
          padding: .5rem 0;
          font-family: 'Lato',sans-serif;
        }
        .social__share > span {
          color: #484848;
          font-size: 1.25rem;
          font-weight: 600;
          vertical-align: middle;
        }
        .social__buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: .25rem;
        }
        .facebook__icon, .linkedin__icon, .twitter__icon {
          width: 50px;
          height: 50px;
          background-color: var(--main-bg-color);
          cursor: pointer;
          margin: 0 .25rem;
        }
        .facebook__icon:hover, .linkedin__icon:hover, .twitter__icon:hover {
          background-color: var(--main-dark-color);
        }
        .facebook__icon {
          mask: url("../../static/icons/facebook-2.svg");
        }
        .linkedin__icon {
          mask: url("../../static/icons/linkedin-2.svg");
        }
        .twitter__icon {
          mask: url("../../static/icons/twitter-2.svg");
        }

        .related__posts {
          text-align: center;
        }

        .related__posts > h2 {
          margin: .25rem;
        }

        .related__posts > span {
          margin: 0 auto 1rem auto;
          display: block;
          width: 350px;
          height: 5px;
          border-top: 2px solid var(--main-dark-color);
        }
        
        .card__wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 .5rem .5rem .5rem;
        }
        .card__wrapper > ul {
          display: flex;
          justify-content: space-around;
          aligh-items: center;
          max-width: 100%;
          list-style: none;
          overflow-x: scroll;
        }
        .card__wrapper ul > li {
          position: relative;
          margin: 0 .25rem;
          flex-shrink: 0;
          border: 1px solid var(--main-bg-color);
          border-radius: 5px;
          height: 200px;
          width: 300px;
          cursor: pointer;
          color: var(--light-french);
        }
        .card__wrapper ul > li > p {
          position: absolute;
          bottom: 0;
        }
        .card__wrapper ul > li > img {
          height: 100%;
        }
        .card__wrapper ul > li:hover {
          border: 5px solid var(--light-french);
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
        @media (max-width: 768px) {
          section > p {
            width: 100%;
          }
          .profile__text {
            width: 100%;
          }
          .social__share {
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
          }
          .social__share > a {
            margin: 1rem;
          }
          .social__buttons {
            padding-top: .5rem;
          }
        }
      `}</style>
    </main>
  );
}
