import Head from "next/head";

const Meta = () => (
  <div>
    <Head>
      <title>Maryam Tavakkoli</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato|Merriweather|Montserrat|Open+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
      :root {
        --dark-light: #777;
        --main-bg-color: #4b6cb7;
        --main-dark-color: #292b5c;
        --light-french: #d1b873;
        --blog-bg-color: #ff8300;
      }

      body {
        margin: 0;
        padding: 0;
        //background: #000046;
        color: #0b0500;
        height: 100vh;
        font-size: 16px;
        line-height: 1.5;
        font-family: Lato, Sans-Serif;
      }
      ::selection {
        color: #fff;
        background: #0b0500;
        text-shadow: none;
      }
      section {
        display: flex;
        flex-flow: column;
      }

      img {
        max-width: 100%;
        border: 0;
        -ms-interpolation-mode: bicubic;
        vertical-align: bottom;
      }
      p {
        margin-top: 0.25rem;
        margin-bottom: 1rem;
      }
      h1 {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1.3;
        margin-top: 0;
        margin-bottom: 0.25rem;
        font-family: Montserrat, Sans-serif;
      }
      h2 {
        font-size: 2.5rem;
        font-weight: 700;
        font-family: Montserrat, Sans-serif;
      }
      .spacer {
      }
      @media (max-width: 768px) {
        h2 {
          font-size: 1.7rem;
          margin-bottom: 0;
        }
      }
    `}</style>
  </div>
);

export default Meta;
