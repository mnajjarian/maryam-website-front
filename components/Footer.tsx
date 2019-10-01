const Footer = () => (
  <section className="footer">
    <h2>Contact</h2>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/maryam-tavakoli/"
          target="_blank"
        >
          <div className="linkedin"></div>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/maryam.tavakkoli.39566"
          target="_blank"
        >
          <div className="facebook"></div>
        </a>
      </li>
    </ul>
    <span>
      site by{' '}
      <a href="https://github.com/mnajjarian" target="_blank">
        mahdi najjarian
      </a>
    </span>
    <style jsx>{`
      .footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 200px;
        background: #000046;
        background: -webkit-linear-gradient(
          to right,
          #1cb5e0,
          #000046
        );
        background: linear-gradient(to right, #1cb5e0, #000046);
      }
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      ul > li {
        padding: 0 10px;
        animation: bounce 1s ease infinite alternate;
      }
      .linkedin {
        width: 50px;
        height: 50px;
        -webkit-mask: url('../static/icons/linkedin.svg') no-repeat
          center;
        mask: url('../static/icons/linkedin.svg') no-repeat center;
        background-color: white;
        background-position: center;
        background-repeat: no-repeat;
      }
      .linkedin:hover {
        background-color: var(--light-french);
      }
      .facebook {
        width: 50px;
        height: 50px;
        -webkit-mask: url('../static/icons/facebook.svg') no-repeat
          center;
        mask: url('../static/icons/facebook.svg');
        background-color: white;
        background-position: center;
        background-repeat: no-repeat;
      }
      .facebook:hover {
        background-color: var(--light-french);
      }
      span {
        font-size: 0.7rem;
        text-transform: capitalize;
        align-self: flex-end;
        margin: 20px;
        color: white;
        word-spacing: 3px;
      }
      a {
        text-decoration: none;
        color: var(--light-french);
        word-spacing: 0;
      }
      h2 {
        font-size: 2rem;
        letter-spacing: 10px;
        text-shadow: 3px 6px 3px rgba(0, 0, 0, 0.1);
        font-variant: small-caps;
      }
    `}</style>
  </section>
);

export default Footer;
