import { TextField, Button } from "@mui/material";
import "./Style.scss";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="container contact-container" id="contact">
      <div>
        <img src="/contact-img.png" />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField id="name" label="Name" variant="outlined" />
          <TextField id="email" label="Email" variant="outlined" />
          <TextField id="subject" label="Subject" variant="outlined" />
          <TextField id="message" label="Message" multiline rows={4} />

          <Button variant="outlined">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
