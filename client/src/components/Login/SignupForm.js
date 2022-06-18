import {React,useContext } from 'react'
import "./login.css";
import {TextField} from "@material-ui/core";
import { Marginer } from "../marginer";
import { AccountContext } from "./AccountContext";

function SignupForm() {
 
  const { switchToSignin } = useContext(AccountContext);

  const TextStyle = {
  padding: "6px ",
  width: 260
};
  

  return (
   <div className="Container">
    
        <TextField
      style={TextStyle}
            label="Fullname"
            placeholder="Enter Fullname"
            fullWidth
            required
          />
          <TextField
          style={TextStyle}
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
           <TextField
           style={TextStyle}
            label="Email"
            placeholder="Enter Email"
            fullWidth
            required
          />
           <TextField
           style={TextStyle}
            label="Password"
            placeholder="Enter Password"
            fullWidth
            required
          />
    
      
      <Marginer direction="vertical" margin={10} />
      <button className="SubmitButton" type="submit">Signup</button>
      <Marginer direction="vertical" margin="1em" />
      <a className="MutedLink" href="#">  
      Already have an account?
      <a className="BoldLink" href="#"  onClick={switchToSignin} > Signin</a> 
      </a>

    </div>
  )
}

export default SignupForm