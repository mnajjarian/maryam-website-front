import Head from "next/head";

const Meta = () => (
  <div>
    <Head>
      <title>Maryam Tavakkoli</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <style jsx global>{`
      *,
      *:before,
      *:after {
        box-sizing: border-box;
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
        color: #fff;
        height: 100vh;
        font-size: 10px;
        font-family: "Open Sans", sans-serif;
      }
      p {
        font-size: 1rem;
        line-height: 1.7rem;
        word-wrap: break-word;
        color: var(--main-dark-color);
      }
      h2 {
        font-size: 1.8rem;
        font-weight: 300;
        text-transform: capitalize;
      }
    `}</style>
  </div>
);

export default Meta;
