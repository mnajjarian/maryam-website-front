import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>Maryam Tavakkoli</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
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
      body {
        margin: 0;
        padding: 0;
        //background: #000046;
        color: #fff;
        height: 100vh;
        font-size: 10px;
        font-family: "Open Sans", sans-serif;
      }
    `}</style>
  </div>
);
