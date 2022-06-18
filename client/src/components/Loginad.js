import { React, useState, useContext } from "react";
import { Context } from "../context/Context"
import { useNavigate } from "react-router-dom"

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


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

function Loginad() {
  const navigate = useNavigate()
  const style = useStyles();
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");


  const { isFetching, dispatch } = useContext(Context)

  function usernamechanged(event) {
    setusername(event.target.value);
  }

  function passwordchanged(event) {
    setpassword(event.target.value);
  }

  const onSubmit = async (event) => {

    event.preventDefault();
    dispatch({ type: "LoginStartAdmin" })
    try {
      const res = await axios.post("http://localhost:3000/login", {
        username: username,
        password: password,
      })
      dispatch({ type: "LoginSuccessAdmin", payload: res.data })
      navigate("/Dashboard")
    } catch (err) {
      dispatch({ type: "LoginFailureAdmin" })
      alert("try again");
    };
  }

  return (
    <div className={style.root}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Login </h2>
          </Grid>

          <TextField
            label="Username"
            placeholder="Enter username"
            onChange={usernamechanged}
            fullWidth
            required
          />

          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            onChange={passwordchanged}
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
            disabled={isFetching}
            onClick={onSubmit}
          >
            login
          </Button>

        </Paper>
      </Grid>
    </div>
  )
}

export default Loginad;
