import React from 'react'
import "./login.css";
import {TextField} from "@material-ui/core";

export default function SigninForm() {
  return (
   <>

   <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
          
          <TextField
            label="Password"
            placeholder="Enter password"
            fullWidth
            required
          />
          </> 

    
  )
}
