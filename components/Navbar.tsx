import * as React from "react";
import Link from "next/link";

const Navbar = () => {
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
    <div className="nav__wrapper">
      <nav id="myHeader">
        <ul>
          <Link href="/">
            <a>home</a>
          </Link>
          <Link href="/about">
            <a>about me</a>
          </Link>
          <Link href="/contact">
            <a>poblications</a>
          </Link>
          <Link href="/contact">
            <a>contact me</a>
          </Link>
          <Link href="/contact">
            <a>research blog</a>
          </Link>
        </ul>
      </nav>
      <style jsx>{`
        .nav__wrapper {
          height: 50px;
        }
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
          nav {
            justify-content
          }
          nav > ul {
            padding: 0;
          }
          
        }
      `}</style>
    </div>
  );
};

export default Navbar;
