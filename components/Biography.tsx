const Biography = () => (
  <section className="biography">
    <img src="../static/images/bio-image.jpg" />
    <div className="biography__content">
      <h2>maryam tavakkoli</h2>
      <span></span>
      <div className="biography__text">
        <p>
          I am a second-year master student in "Cloud computing and services"
          with minors in "Entrepreneurship and business". I am doing my studies
          in “EIT Digital Master School”, where I will obtain a double-degree
          from two universities which I have studied in: Aalto University in
          Finland, and TU Delft in the Netherlands. Currently, I am working at
          Nokia Bell Labs, in Finland, as a thesis writer. In this position, I
          am conducting a research study on containerizing of a current telco
          IoT publish/subscribe application, and suitability of Kubernetes to be
          used for its deployment. Docker, Kubernetes, Nokia’s cloud environment
          (NESC), Apache Kafka and GIT are technologies and tools which I am
          using during my work in Nokia.
        </p>
      </div>
      <div className="biography__button">
        <a href="/about">read more</a>
      </div>
    </div>
    <style jsx>{`
      .biography {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        color: #292b5c;
        background: #ece9e6;
        background: -webkit-linear-gradient(to right, #ffffff, #ece9e6);
        background: linear-gradient(to right, #ffffff, #ece9e6);
      }
      .biography > img {
        height: 350px;
        width: 273px;
        padding: 40px;
      }
      .biography__content {
        width: 40%;
      }
      .biography__content > h2 {
        font-size: 1.5rem;
        font-weight: 300;
        text-transform: capitalize;
      }
      .biography__text {
        width: 423px;
      }
      .biography__text > p {
        word-wrap: break-word;
        overflow-wrap: break-word;
        font: normal normal normal 18px/1.4em "times new roman", times, serif;
        color: #27223e;
        line-height: 1.4em;
      }
      .biography__content > span {
        display: block;
        width: 116px;
        height: 5px;
        border-top: 2px solid rgba(39, 34, 62, 1);
      }
      .biography__button {
        height: 40px;
        min-height: 19px;
        width: 142px;
        border: 2px solid #27223e;
        color: #27223e;
        padding: 4px 12px;
        font-size: 0.7rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .biography__button > a {
        text-decoration: none;
        text-transform: capitalize;
        font: normal normal normal 14px/1.4em helvetica-w01-roman,
          helvetica-w02-roman, helvetica-lt-w10-roman, sans-serif;
        white-space: nowrap;
        color: initial;
      }
      .biography__button:hover {
        border-color: #ffffff;
      }
      .biography__button:hover a {
        color: #ffffff;
      }
    `}</style>
  </section>
);

export default Biography;
