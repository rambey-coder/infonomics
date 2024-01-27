import { Link } from "react-router-dom";
import "./style.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <div className={`${isSticky ? " header_cont active" : "header_cont"}`}>
      <div className="header-container">
        <Link to="/">
          <img src="/logo.svg" alt="Infonomics-logo" />
        </Link>
        {width < 545 && (
          <div onClick={() => setToggle(!toggle)}>
            <img src={toggle ? "/x.svg" : "/menu.svg"} />
          </div>
        )}

        <div className={`${toggle ? "header-right active" : "header-right"}`}>
          <a href="/">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
