import  {React, useState ,useContext} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {Context} from "../context/Context"
const preset = "mrbielhx"
const url = 'https://api.cloudinary.com/v1_1/dkgglsra2/image/upload'


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
  

function EditUser(props) {
  const {user,dispatch} = useContext(Context)
  
  const navigate = useNavigate()
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
    const handleChangeUsername= (event) => {
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
      event.preventDefault()
      dispatch({type:  "UpdateStart" })
      console.log(user)
      

      const updatedUser={ userId:user[0]._id,fullname,username,email,password}
      try {
        const res= await axios.put(`http://localhost:3000/updateUser/${user[0]._id}`,updatedUser)
        console.log(res)
        const resultat=[res.data]
        dispatch({ type: "UpdateSuccess", payload: resultat })
        //if (res) navigate("/profile")
        window.location.reload()

        
  
      } catch (err) {
        dispatch({ type: "UpdateFailure" })
        alert("try again");
      };
      console.log(updatedUser)

    };
  return (
    <div>
    <Button onClick={handleOpen}>Update user</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div>
          <TextField
          
            placeholder={props.user.fullname}
            fullWidth
            required
            onChange={handleChangeFullname}
          />
        </div>
        <div>
          <input
            type="file"
            id="fileinput"
            className="photoInput"
            placeholder="the picture.."
            name="image"
            accept="image/*"
            onChange={previewImage}
          />
          <img id="output_image" style={{ width: "75px", height: "75px" }} className="create-preview-image" />
        </div>
        <div>
          <TextField
            
            placeholder={props.user.username}
            fullWidth
            required
            onChange={handleChangeUsername}
          />
        </div>
        
        <div>
          <TextField
            
            placeholder={props.user.email}
            fullWidth
            required
            onChange={ handleChangeEmail}
          />
        </div>

        <div>
          <TextField
            label="password"
            placeholder="Enter password"
            fullWidth
            required
            onChange={ handleChangePassword}
          />
        </div>
        <div>
          <button
          onClick={UpdateUser}
          >
           Edit
          </button>
        </div>
      </Box>
    </Modal>
  </div>
);
  
}

export default EditUser