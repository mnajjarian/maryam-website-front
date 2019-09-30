import * as React from 'react';

type Props = {
  imgUrl: string;
  title: string;
  href: string;
  btnText: string;
  text: string;
  flexDirect: string;
  borderRadius: string;
};
const SectionLayout = (props: Props) => (
  <section>
    <img src={props.imgUrl} alt="biography image" />
    <article>
      <h2>{props.title}</h2>
      <span></span>
      <p>{props.text}</p>
      <div>
        <a href={props.href}>{props.btnText}</a>
      </div>
    </article>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: ${props.flexDirect};
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        color: var(--main-dark-color);
        background: url('../static/images/Light-blue.jpg') fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      img {
        height: 400px;
        width: 350px;
        border-radius: ${props.borderRadius};
        padding: 40px;
      }
      article {
        width: 40%;
      }
      h2 {
        margin: 0;
        text-transform: capitalize;
      }

      p {
        line-height: 1.65;
        letter-spacing: 0.1px;
        font-size: 1.1rem;
      }

      span {
        display: block;
        margin-bottom: 10px;
        width: 116px;
        height: 5px;
        border-top: 2px solid rgba(39, 34, 62, 1);
      }
      div {
        height: 40px;
        min-height: 19px;
        width: 142px;
        border: 2px solid var(--main-dark-color);
        color: var(--main-dark-color);
        padding: 4px 12px;
        font-size: 0.7rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      a {
        text-decoration: none;
        text-transform: capitalize;
        font-size: 1rem;
        white-space: nowrap;
        color: initial;
      }
      div:hover {
        border-color: var(--light-french);
      }
      div:hover a {
        color: var(--light-french);
      }
      @media (max-width: 768px) {
        section {
          flex-direction: column;
        }
        article {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
        }
      }
    `}</style>
  </section>
);

export default SectionLayout;
