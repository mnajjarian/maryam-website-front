import * as React from "react";
import classNames from "classnames";
import Link from "next/link";

const Nav = ({ toggle }) => (
  <nav
    id="myHeader"
    className={classNames({
      nav__wrapper: true,
      show: !toggle
    })}
  >
    <ul>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a>about me</a>
      </Link>
      <Link href="/publication">
        <a>poblications</a>
      </Link>
      <Link href="/contact">
        <a>contact me</a>
      </Link>
      <Link href="/contact">
        <a>Blog</a>
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
        background: #4b6cb7;
        background: -webkit-linear-gradient(to right, #182848, #4b6cb7);
        background: linear-gradient(to right, #182848, #4b6cb7);
      }
      nav > ul {
        display: flex;
        align-items: center;
      }
      a {
        text-decoration: none;
        text-transform: capitalize;
        color: white;
        padding: 8px 16px;
        font-size: 1rem;
      }
      a:hover {
        color: #d1cc73;
      }
      @media (max-width: 768px) {
        .show {
          display: none;
        }
        .sticky {
          display: none;
        }
        nav {
          justify-content: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 30%;
          height: 300px;
        }

        nav > ul {
          padding: 0;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    `}</style>
  </nav>
);
const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
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
    <div>
      <Nav toggle={toggle} />
      <div
        className={classNames({
          menu__button: true,
          change: toggle
        })}
        onClick={() => setToggle(!toggle)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <style jsx>{`
        .menu__button {
          display: none;
        }

        .nav__wrapper {
          height: 50px;
        }

        .menu__button {
          position: absolute;
          top: 10px;
          left: 10px;
          cursor: pointer;
        }
        .menu__button > div {
          width: 35px;
          height: 5px;
          background-color: black;
          margin: 6px 0;
          transition: 0.4s;
        }
        .change > :nth-child(1) {
          transform: rotate(-45deg) translate(-9px, 6px);
        }
        .change > :nth-child(2) {
          opacity: 0;
        }
        .change > :nth-child(3) {
          transform: rotate(45deg) translate(-8px, -8px);
        }
        @media (max-width: 768px) {
          .menu__button {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
