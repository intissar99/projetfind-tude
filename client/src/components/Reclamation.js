import { React, useState, useContext } from "react";
import { Context } from "../context/Context";
import Modal from "@mui/material/Modal";
import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  boxShadow: 24,
  p: 4,
};

function Reclamation(props) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [message, setMess] = useState();
  const [subject, setSubj] = useState();

  const { user } = useContext(Context);

  const handleChangeSujet = (event) => {
    setSubj(event.target.value);
  };
  const handleChangeReclamation = (event) => {
    setMess(event.target.value);
  };
  const createReclamation = async (event) => {
    event.preventDefault();
    console.log(user[0].email);
    try {
      const res = axios.post("http://localhost:3000/reclamation", {
        subject: subject,
        message: message,
        email: user[0].email,
        productId: props.productId,
      });
      alert("reclamation faite");
    } catch (error) {
      alert("try again");
    }
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        id="submit-button"
        onClick={handleOpen}
      >
        Reclamer
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {user ? (
          <section style={{ marginTop: "2em" }}>
            <Container maxWidth="md">
              <Card sx={style}>
                <CardContent>
                  <Container maxWidth="sm">
                    <form>
                      <FormGroup row={true} sx={{ marginTop: "1em" }}>
                        <FormControl fullWidth>
                          <InputLabel>Subject</InputLabel>
                          <Input onChange={handleChangeSujet} />
                        </FormControl>
                      </FormGroup>
                      <FormGroup row={true} sx={{ marginTop: "1em" }}>
                        <FormControl fullWidth>
                          <InputLabel>Message</InputLabel>
                          <Input onChange={handleChangeReclamation} />
                        </FormControl>
                      </FormGroup>

                      <FormGroup row={true} sx={{ marginTop: "1em" }}>
                        <FormControl fullWidth>
                          <Button
                            onClick={createReclamation}
                            variant="contained"
                            color="primary"
                            type="submit"
                            id="submit-button"
                          >
                            Send
                          </Button>
                        </FormControl>
                      </FormGroup>
                    </form>
                  </Container>
                </CardContent>
              </Card>
            </Container>
          </section>
        ) : (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"You have to login first "}
            </DialogTitle>

            <DialogActions>
              <Button onClick={handleClose}>Agree</Button>
            </DialogActions>
          </Dialog>
        )}
      </Modal>
    </div>
  );
}

export default Reclamation;
