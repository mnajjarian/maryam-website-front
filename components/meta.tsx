import Head from "next/head";

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
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
        background: #000;
        color: #fff;
        height: 100vh;
        font-size: 10px;
        font-family: Arial, Helvetica, sans-serif;
      }
    `}</style>
  </div>
);
