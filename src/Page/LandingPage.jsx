import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Hero from "../components/HeroSection/Hero";
import About from "../components/AboutSection/About";
import Choose from "../components/ChooseSection/Choose";
import System from "../components/SystemsSection/System";
import Project from "../components/Project/Project";
import Contact from "../components/ContactUsSection/Contact";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <System />
      <Project />
      <Choose />
      <Contact />
    </div>
  );
};

export default LandingPage;
