import Meta from "./meta";
import Navbar from "./Navbar";

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  return (
    <div>
      <Meta />
      <div className="header">
        <header>
          <div className="header__content">
            <h1>
              <a href="/">maryam tavakkoli</a>
            </h1>
            <span>cloud computing</span>
          </div>
        </header>
        <Navbar />
      </div>
      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default Header;
