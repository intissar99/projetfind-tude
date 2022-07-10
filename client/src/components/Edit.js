import { React, useState, useContext } from "react";
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
import { Context } from "../context/Context";
const preset = "mrbielhx";
const url = "https://api.cloudinary.com/v1_1/dkgglsra2/image/upload";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,

  boxShadow: 24,
  p: 4,
};

function Profil(props) {
  const { user, dispatch } = useContext(Context);

  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open, setOpen] = useState(false);
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [fileImage, setFileImage] = useState("");

  const handleChangeFullname = (event) => {
    setFullname(event.target.value);
  };
  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const previewImage = (e) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("output_image");
      output.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
    var formData = new FormData();
    var file = e.target.files[0];
    formData.append("file", file);
    formData.append("upload_preset", preset);
    axios({
      url: url,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: formData,
    })
      .then((res) => {
        console.log("answer for post request:", res.data.secure_url);
        setFileImage({ image1: res.data.secure_url });
        console.log("state imge:", fileImage);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const UpdateUser = async (event) => {
    event.preventDefault();
    dispatch({ type: "UpdateStart" });
    console.log(user);

    const updatedUser = {
      userId: user[0]._id,
      fullname,
      username,
      email,
      password,
      picture: fileImage.image1
    };
    try {

      console.log(updatedUser);
      const res = await axios.put(
        `http://localhost:3000/updateUser/${user[0]._id}`,
        updatedUser
      );
      console.log("inside try", updatedUser);

      const resultat = [res.data];
      dispatch({ type: "UpdateSuccess", payload: resultat });
      //if (res) navigate("/profile")
      window.location.reload();
    } catch (err) {
      dispatch({ type: "UpdateFailure" });
      alert("try again");
    }
    console.log(updatedUser);
  };
  return (
    <div>
      <Button variant="contained"
        color="primary"
        type="submit"
        id="submit-button" onClick={handleOpen}>Update user</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <section style={{ marginTop: "2em" }}>
          <Container maxWidth="md">
            <Card sx={style}>
              <CardContent>
                <Container maxWidth="sm">
                  <Typography variant="h2" color="text.primary" gutterBottom>
                    Update Profile
                  </Typography>
                  <form>
                    <FormGroup row={true} sx={{ marginTop: "1em" }}>
                      <FormControl fullWidth>
                        <InputLabel >
                          {props.user.username}
                        </InputLabel>
                        <Input

                          onChange={handleChangeUsername}
                        />
                        <FormHelperText >
                          Enter new username
                        </FormHelperText>
                      </FormControl>
                    </FormGroup>
                    <FormGroup row={true} sx={{ marginTop: "1em" }}>
                      <FormControl fullWidth>
                        <InputLabel >
                          Email
                        </InputLabel>
                        <Input onChange={handleChangeEmail} />
                        <FormHelperText >
                          Enter new email
                        </FormHelperText>
                      </FormControl>
                    </FormGroup>
                    <FormGroup row={true} sx={{ marginTop: "1em" }}>
                      <FormControl fullWidth>
                        <InputLabel >
                          Password
                        </InputLabel>
                        <Input type="password" onChange={handleChangePassword} />
                        <FormHelperText >
                          Enter new password
                        </FormHelperText>
                      </FormControl>
                    </FormGroup>
                    <FormGroup sx={{ marginTop: "1em" }}>
                      <FormControl fullWidth>
                        <Input type="file"
                          id="fileinput"
                          className="photoInput"
                          placeholder="the picture.."
                          name="image"
                          accept="image/*"
                          onChange={previewImage} />
                        <img id="output_image" style={{ width: "75px", height: "75px" }} className="create-preview-image" />
                      </FormControl>
                    </FormGroup>

                    <FormGroup row={true} sx={{ marginTop: "1em" }}>
                      <FormControl fullWidth>
                        <Button
                          onClick={UpdateUser}
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
}

export default Profil;
