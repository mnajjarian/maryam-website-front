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
        --main-bg-color: #4b6cb7;
        --main-dark-color: #292b5c;
        --light-french: #d1b873;
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
    `}</style>
  </div>
);

export default Meta;
