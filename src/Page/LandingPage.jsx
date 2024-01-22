import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Hero from "../components/HeroSection/Hero";
import About from "../components/AboutSection/About";
import Value from "../components/ValueSection/Value";
import Partnership from "../components/Partnership/Partnership";
import Service from "../components/ServicesSection/Service";
import Technology from "../components/TechSection/Technology";
import Framework from "../components/TechFrameworkSection/Framework";
import Choose from "../components/ChooseSection/Choose";
import Infonomics from "../components/Infonomics/Infonomics";
import System from "../components/SystemsSection/System";
import Accelerator from "../components/AcceleratorSection/Accelerator";
import Stewardship from "../components/StewardSection/Stewardship";
import Team from "../components/TeamSection/Team";
import Operationization from "../components/OperationizationSection/Operationization";

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
      <Value />
      <Partnership />
      <Service />
      <Technology />
      <Framework />
      <Choose />
      <Infonomics />
      <System />
      <Accelerator />
      <Stewardship />
      <Team />
      <Operationization />
    </div>
  );
};

export default LandingPage;
