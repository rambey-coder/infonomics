import "./style.scss";
import { useThemeContext } from "../../context/Context";

const Choose = () => {
  const { theme } = useThemeContext();

  const lightTheme = {
    background: "linear-gradient(150deg, #21214F, #85374E)",
    color: "#fff",
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
      <div className="container choose_cont">
        <div className="img-cont ">
          <ul>
            <li>
              Proven track record as the main Business Intelligence partner for
              MTN Nigeria.
            </li>

            <li>
              Continuous development and strengthening of relationships by
              exceeding client expectations.
            </li>

            <li>
              Emphasis on prompt, on-time, and high-quality service delivery.
            </li>

            <li>
              Solution implementation experience and deep IT domain knowledge.
            </li>

            <li>
              A program management approach that combines firmness and agility.
            </li>

            <li>
              Consistent success in on-time implementation, getting it right
              from the very first time for our customers.
            </li>
          </ul>
        </div>

        <div className="text-cont">
          <h3 style={{ color: theme === "light" ? "#fff" : "" }}>
            Why Choose Us?
          </h3>
          <h4 style={{ color: theme === "light" ? "#fff" : "" }}>
            Infonomics Technology Services Limited
          </h4>
          <p style={{ color: theme === "light" ? "#fff" : "" }}>
            For the past 8 years, Infonomics has been at the forefront of the IT
            services landscape in Nigeria, demonstrating unwavering dedication
            to delivering exceptional quality.
            <br /> <br />
            Our commitment is evident in our consistent efforts to leverage a
            team of highly skilled and experienced professionals, enabling us to
            offer cutting-edge IT solutions that adhere to best practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
