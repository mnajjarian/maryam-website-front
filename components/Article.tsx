const Article = () => (
  <section className="articles">
    <h2>recent articles</h2>
    <span></span>
    <style jsx>{`
      .articles {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        background: #8e9eab;
        background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);
        background: linear-gradient(to right, #eef2f3, #8e9eab);
      }
      h2 {
        font-size: 1.5rem;
        text-transform: uppercase;
        padding: 16px 8px;
        margin-bottom: 0;
        color: rgba(39, 34, 62, 1);
      }
      .articles > span {
        display: block;
        width: 116px;
        height: 5px;
        border-top: 2px solid rgba(39, 34, 62, 1);
      }
    `}</style>
  </section>
);

export default Article;
