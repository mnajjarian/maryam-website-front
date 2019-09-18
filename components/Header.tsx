import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="header">
        <header>
          <div className="header__content">
            <h1>
              <a href="/">maryam tavakkoli</a>
            </h1>
            <span>cloud engineer</span>
          </div>
        </header>
        <div className="nav__wrapper">
          <Navbar />
        </div>
      </div>
      <style jsx>{`
        .nav__wrapper {
          height: 50px;
        }
        header {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 440px;
          background: #4b6cb7;
          background-image: url("../static/images/header2.jpeg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .header__content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #292b5c;
        }
        .header__content > h1 {
          margin: 0;
        }
        h1 > a {
          text-decoration: none;
          padding: 0;
          font: italic normal normal 45px/1.4em "times new roman", times, serif;
          font-weight: 600;
          text-transform: capitalize;
          color: #292b5c;
        }
        .header__content > span {
          padding: 0;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav__wrapper {
            height: 0px;
          }
          header {
            height: 300px;
          }
          h1 > a {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
