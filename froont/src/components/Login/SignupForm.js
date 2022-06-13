import React from 'react'
import "./login.css";
import {TextField} from "@material-ui/core";

function SignupForm() {
  return (
   <div className="BoxContainer">
       <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />

    </div>
  )
}

export default SignupForm