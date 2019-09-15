import Link from "next/link";
import Meta from "./meta";

const linkStyle = {
  marginRight: 15
};

const headerStyle = `
   a {
     text-decoration: none;
   }
`;

const Header = () => {
  return (
    <div>
      <Meta />
      <div className="header">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Me</a>
        </Link>
        <Link href="/contact">
          <a>Contact Me</a>
        </Link>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          width: 100%;
          height: 50px;
          background-color: rgba(39, 34, 62, 1);
        }
        a {
          text-decoration: none;
          color: white;
          padding: 8px;
        }
        a:hover {
          color: #dfcfba;
        }
      `}</style>
    </div>
  );
};

export default Header;
