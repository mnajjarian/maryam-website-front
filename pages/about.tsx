import Header from "../components/Header";
import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <section>
      <div className="about">
        <div className="about__content">
          <h2>About Me</h2>
          <span></span>
          <p>
            I am a second-year master student in "Cloud computing and services"
            with minors in "Entrepreneurship and business". I am doing my
            studies in “EIT Digital Master School”, where I will obtain a
            double-degree from two universities which I have studied in: Aalto
            University in Finland, and TU Delft in the Netherlands. Currently, I
            am working at Nokia Bell Labs, in Finland, as a thesis writer. In
            this position, I am conducting a research study on containerizing of
            a current telco IoT publish/subscribe application, and suitability
            of Kubernetes to be used for its deployment. Docker, Kubernetes,
            Nokia’s cloud environment (NESC), Apache Kafka and GIT are
            technologies and tools which I am using during my work in Nokia.
          </p>
          <div className="about__button">
            <a href="/about">download full CV</a>
          </div>
        </div>
        <img src="../static/images/bio-image.jpg" />
      </div>

      <style jsx>{`
        section {
          background: url("../static/images/Light-blue.jpg") no-repeat center
            center fixed;
          background-size: cover;
        }
        .about {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          min-height: 100vh;
          color: #292b5c;
        }
        .about__content > h2 {
          margin: 0;
          font-size: 1.8rem;
          font-weight: 300;
          text-transform: capitalize;
        }
        .about__content > p {
          width: 450px;
          word-wrap: break-word;
          overflow-wrap: break-word;
          font-size: 1rem;
          color: #27223e;
          line-height: 1.5rem;
        }
        .about__content > span {
          display: block;
          width: 116px;
          height: 5px;
          border-top: 2px solid rgba(39, 34, 62, 1);
        }
        .about > img {
          height: 400px;
          width: 320px;
        }
        .about__button {
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
        .about__button > a {
          text-decoration: none;
          text-transform: capitalize;
          font-size: 1rem;
          white-space: nowrap;
          color: initial;
        }
        .about__button:hover {
          border-color: #d1cc73;
        }
        .about__button:hover a {
          color: #d1cc73;
        }
        @media (max-width: 768px) {
          .about {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
          }
          .about__content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin: 0 auto;
            padding: 20px;
          }
        }
      `}</style>
    </section>
  </Layout>
);

export default About;
