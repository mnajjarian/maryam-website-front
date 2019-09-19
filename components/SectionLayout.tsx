import * as React from "react";

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
  <section className="section">
    <img src={props.imgUrl} />
    <div className="section__content">
      <h2>{props.title}</h2>
      <span></span>
      <p>{props.text}</p>
      <div className="section__button">
        <a href={props.href}>{props.btnText}</a>
      </div>
    </div>
    <style jsx>{`
      section {
        background: url("../static/images/Light-blue.jpg") no-repeat center
          center fixed;
        background-size: cover;
      }
      .section {
        display: flex;
        flex-direction: ${props.flexDirect};
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        color: var(--main-dark-color);
      }
      img {
        height: 400px;
        width: 350px;
        border-radius: ${props.borderRadius};
        padding: 40px;
      }
      .section__content {
        width: 40%;
      }
      h2 {
        font-size: 1.8rem;
        font-weight: 300;
        text-transform: capitalize;
      }
      span {
        display: block;
        width: 116px;
        height: 5px;
        border-top: 2px solid rgba(39, 34, 62, 1);
      }
      .section__button {
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
      .section__button > a {
        text-decoration: none;
        text-transform: capitalize;
        font-size: 1rem;
        white-space: nowrap;
        color: initial;
      }
      .section__button:hover {
        border-color: var(--light-french);
      }
      .section__button:hover a {
        color: var(--light-french);
      }
      @media (max-width: 768px) {
        .section {
          flex-direction: column;
        }
        .section__content {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
        }
      }
    `}</style>
  </section>
);

export default SectionLayout;
