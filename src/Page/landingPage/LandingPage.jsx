import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Hero from "../../components/HeroSection/Hero";
import About from "../../components/AboutSection/About";
import Choose from "../../components/ChooseSection/Choose";
import System from "../../components/SystemsSection/System";
import Project from "../../components/Project/Project";
import Contact from "../../components/ContactUsSection/Contact";
import { useThemeContext } from "../../context/Context";
import "./Style.scss";

const LandingPage = () => {
  const location = useLocation();
  const { theme } = useThemeContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      className="general_content_container"
      style={{ background: theme === "light" ? "#fff" : "#181a42" }}>
      <img
        src="/bgJar.svg"
        alt="background"
        className="background_square square1"
      />

      <img
        src="/bgJar.svg"
        alt="background"
        className="background_square square2"
      />

      <img
        src="/bgJar.svg"
        alt="background"
        className="background_square square3"
      />

      <img
        src="/bgJar.svg"
        alt="background"
        className="background_square square4"
      />
      <img
        src="/bgJar.svg"
        alt="background"
        className="background_square square5"
      />
      <img
        src="/bgJar.svg"
        alt="background"
        className="background_square square6"
      />

      <Header />
      <div className="general_container">
        <Hero />
        <About />
        <System />
        <Project />
        <Choose />
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
