import { TextField } from "@mui/material";
import { useThemeContext } from "../../context/Context";
import "./Style.scss";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

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
      <div className="container contact-container" id="contact">
        <div>
          <img src="/contact-img.png" />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              inputProps={{
                style: {
                  borderColor: theme === "light" ? "#fff" : "",
                  color: theme === "light" ? "#fff" : "",
                },
              }}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              inputProps={{
                style: {
                  borderColor: theme === "light" ? "#fff" : "",
                  color: theme === "light" ? "#fff" : "",
                },
              }}
            />
            <TextField
              id="subject"
              label="Subject"
              variant="outlined"
              inputProps={{
                style: {
                  borderColor: theme === "light" ? "#fff" : "",
                  color: theme === "light" ? "#fff" : "",
                },
              }}
            />
            <TextField
              id="message"
              label="Message"
              multiline
              rows={4}
              inputProps={{
                style: {
                  borderColor: theme === "light" ? "#fff" : "",
                  color: theme === "light" ? "#fff" : "",
                },
              }}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
