import { Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img src="/logo.svg" alt="Infonomics-logo" />
      </Link>

      <div className="header-right">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
