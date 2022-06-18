import { React, useContext } from "react";
import "./login.css";
import { TextField } from "@material-ui/core";
import { Marginer } from "../marginer";
import { AccountContext } from "./AccountContext";

export default function SigninForm() {
  const TextStyle = {
    padding: "6px ",
    width: 260,
  };

  const { switchToSignup } = useContext(AccountContext);
  return (
    <div className="Container">
      <TextField
        style={TextStyle}
        label="Username"
        placeholder="Enter username"
        fullWidth
        required
      />

      <TextField
        style={TextStyle}
        label="Password"
        placeholder="Enter password"
        fullWidth
        required
      />
      <Marginer direction="vertical" margin={10} />
      <a className="MutedLink" href="#">
        {" "}
        Forget your password?{" "}
      </a>
      <Marginer direction="vertical" margin="1.6em" />
      <button className="SubmitButton" type="submit">
        Signin
      </button>
      <a className="MutedLink" >
        Don't have an accoun?{" "}
        <a className="BoldLink"  onClick={switchToSignup}>
          {" "}
          Signup
        </a>
      </a>
    </div>
  );
}
