import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"
function RepReclamation() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const sendEmail = async () => {
    console.log(email, message);
    await axios.post('http://localhost:3000/recrecla/sendemail', { email, message }).then((res) => { console.log(res); })
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        reponse
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Response</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=" Message"
            type="message"
            fullWidth
            variant="standard"
            onChange={(e) => { setMessage(e.target.value) }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleClose && sendEmail}>send</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default RepReclamation