import "./style.scss";
import { useThemeContext } from "../../context/Context";

const About = () => {
  const { theme } = useThemeContext();

  const lightTheme = {
    background: "linear-gradient(150deg, #21214F, #85374E)",
  };

  const darkTheme = {
    background: "",
  };

  const heroStyles = (theme) => ({
    background:
      theme === "light" ? lightTheme.background : darkTheme.background,
  });
  return (
    <div style={heroStyles(theme)}>
      <div className="container " id="about">
        <div
          className="abt_containeter"
          style={{
            background: theme === "light" && "#201c43",
          }}>
          <div>
            <img src="/about-mg-s.png" />
          </div>

          <div>
            <h3
              style={{
                color: theme === "light" ? "#fff" : "",
              }}>
              About Infonomics
            </h3>
            <p
              style={{
                color: theme === "light" ? "#fff" : "#696969",
              }}>
              Infonomics Technology Services Limited, previously known as PBT
              Technology Services Nigeria Limited, is a homegrown IT solutions
              provider. Our expertise lies in creating software and data-driven
              applications that deliver valuable insights, consistently giving
              our clients a competitive edge.
            </p>
            <p
              style={{
                color: theme === "light" ? "#fff" : "#696969",
              }}>
              Our collaboration extends to some of the worlds leading finance,
              security, and communication enterprises. We work closely with them
              to identify and implement tailored solutions that directly address
              their unique business challenges. We aim to demonstrate how our
              proven track record and deep industry partnerships can empower
              your organization to achieve its goals and stay ahead in a rapidly
              evolving market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
