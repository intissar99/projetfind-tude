import { useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

function Register() {
  const style = useStyles();
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [passsword, setpassword] = useState("");
  const navigate = useNavigate()
  function fullnamechanged(event) {
    setfullname(event.target.value);
  }
  function navigatelogin() {
    navigate("/Login")
  }

  function usernamechanged(event) {
    setusername(event.target.value);
  }

  function emailchanged(event) {
    setemail(event.target.value);
  }
  function genPass() {
    return Math.random().toString(36).slice(-8);
  }

  function onSubmit(event) {
    const pas = genPass()
    setpassword(pas)
    event.preventDefault();
    axios.post("http://localhost:3000/user/register", {
      fullname: fullname,
      username: username,
      email: email,
      password: pas,
    })
      .then((res) => {
        alert("user added");
      })
      .catch(() => {
        alert("try again");
      });
  }

  return (
    <div className={style.root}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign Up </h2>
          </Grid>
          <TextField
            label="Fullname"
            placeholder="Enter fullname"
            onChange={fullnamechanged}
            fullWidth
            required
          />
          <TextField
            label="Username"
            placeholder="Enter username"
            onChange={usernamechanged}
            fullWidth
            required
          />
          <TextField
            label="Email"
            placeholder="Enter email"
            type="Email"
            onChange={emailchanged}
            fullWidth
            required
          />

          <Typography>
            <b>Min 6 charecters. alpha/numeric characters</b>
          </Typography>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={onSubmit}
          >
            register
          </Button>

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={navigatelogin}
          >
            if you are not registred login
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default Register;
