import { React, useState, useContext } from "react";
import { Context } from "../context/Context"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

import axios from "axios";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Reclamation(props) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [message, setMess] = useState();
  const [subject, setSubj] = useState();
  const { user } = useContext(Context)

  const handleChangeSujet = (event) => {
    setSubj(event.target.value);
  };
  const handleChangeReclamation = (event) => {
    setMess(event.target.value);
  };
  const createReclamation = async (event) => {
    event.preventDefault();
    console.log(user[0].email)
    try {
      const res = axios.post("http://localhost:3000/reclamation", {
        subject: subject,
        message: message,
        email: user[0].email,
        productId: props.productId
      });
      alert("reclamation faite");
    } catch (error) {
      alert("try again");
    }
  };
  return (
    <div>
      <Button onClick={handleOpen}>Reclamer</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {user ? <Box sx={style}>
          <div>
            <TextField
              label="sujet de la reclamation"
              placeholder="sujet"
              fullWidth
              required
              onChange={handleChangeSujet}
            />
          </div>
          <div>
            <TextField
              label="reclamation"
              placeholder="reclamation"
              fullWidth
              required
              onChange={handleChangeReclamation}
            />
          </div>
          <div>
            <button onClick={createReclamation}> ok </button>
          </div>
        </Box> : <h1> you have to login first </h1>}
      </Modal>
    </div>
  )
}

export default Reclamation