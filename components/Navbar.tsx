import * as React from "react";
import Link from "next/link";

const Navbar = () => {
  const [fixed, setFixed] = React.useState("");
  React.useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }) as any;
    return () => {
      window.removeEventListener("scroll", scrollCallBack) as any;
    };
  }, []);
  return (
    <nav id="myHeader">
      <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Me</a>
        </Link>
        <Link href="/contact">
          <a>Contact Me</a>
        </Link>
      </ul>
      <style jsx>{`
        .sticky {
          position: fixed;
          top: 0;
        }
        nav {
          display: flex;
          align-items: center;
          width: 100%;
          height: 50px;
          background-color: #092c59;
        }
        nav > ul {
          display: flex;
          align-items: center;
          //padding: 0;
        }
        a {
          text-decoration: none;
          color: white;
          padding: 8px 16px;
          font-size: 1rem;
        }
        a:hover {
          color: #dfcfba;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
