import React from "react";
import emailjs from "emailjs-com";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

export default function Contactus() {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm("service_640bcoc", "contact_us_id", e.target, "oDIRAJoi8b4gHhm4F")
      .then(
        (result) => {
          console.log(result.text);
        },(error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Grid>
        <Card style={{ maxWidth: 500, padding: "20px 5px", margin: " 90px auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form and our team will get back to you within 24
              hours.
            </Typography>
            <form onSubmit={sendEmail}>
              <Grid container spacing={1}>
                <Grid item xs={12} >
                  <TextField
                    name="name"
                    placeholder="Enter name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="subject"
                    type="subject"
                    placeholder="Enter subject"
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
