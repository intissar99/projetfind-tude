import { React, useState} from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  
  boxShadow: 24,
  p: 4,
};

function EditComment (props) {
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open, setOpen] = useState(false);
  const [Comment, setComment] = useState();
  const [Updatedcomment, setUpdatedComment] = useState([]);

  const handleChangeComment = (event) => {
    setUpdatedComment(event.target.value);
  };
 
  };
  const UpdateComment = async (commentid, event) => {
    event.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:3000/updateComment/${commentid}`,
        { updatedComment }
      );
      console.log(res);
      
    } catch (err) {
      alert("try again");
    }
    console.log(updatedComment);
  };
  return (
    <div>
      <Button variant="contained"
                  color="primary"
                  type="submit"
                  id="submit-button" onClick={handleOpen}>Update </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <section style={{marginTop:"2em"}}>
      <Container maxWidth="md">
        <Card sx={style}>
          <CardContent>
            <Container maxWidth="sm">
            
          <form>
            
            <FormGroup row={true} sx={{ marginTop: "1em" }}>
              <FormControl fullWidth>
                <InputLabel >
                Comment 
                </InputLabel>
                <Input  onChange={handleChangeComment} />
                <FormHelperText >
                  Enter your comment 
                </FormHelperText>
              </FormControl>
            </FormGroup>
            
        

            <FormGroup row={true} sx={{ marginTop: "1em" }}>
              <FormControl fullWidth>
                <Button
                  onClick={  UpdateComment }
                  variant="contained"
                  color="primary"
                  type="submit"
                  id="submit-button"
                >
                  Save Changes
                </Button>
              </FormControl>
            </FormGroup>
          </form>
          </Container>
          </CardContent>
        </Card>
      </Container>

    </section>
      </Modal>
    </div>
  );

export default Profil;
