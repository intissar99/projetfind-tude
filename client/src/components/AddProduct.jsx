import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  
} from "@mui/material";
//import 'dotenv/config'
const preset = "mrbielhx"
const url = 'https://api.cloudinary.com/v1_1/dkgglsra2/image/upload'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  
  boxShadow: 24,
  p: 4,
};

export default function AddProduct() {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [description, setDescr] = useState();
  const [categorie, setCategorie] = useState();
  const [fileImage, setFileImage] = useState("");

  console.log(process.env.preset);
  console.log(process.env.url);


  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescr(event.target.value);
  };
  const handleChangeCategorie = (event) => {
    setCategorie(event.target.value);
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
  const createProduct = async (event) => {
    event.preventDefault();
    try {
      const res = axios.post("http://localhost:3000/createProduct", {
        name: name,
        description: description || null,
        categorie: categorie || null,
        imageUrl: fileImage.image1 || null
      });
      alert("product added");
      console.log("product bug", res);

    } catch (error) {
      alert("try again");
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Product</Button>
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
              <TextField
               autoFocus
               margin="dense"
               id="name"
               label="Product name"
               type="name"
               fullWidth
               variant="standard"
              onChange={handleChangeName}
            />
              </FormControl>
            </FormGroup>
            <FormGroup row={true} sx={{ marginTop: "1em" }}>
              <FormControl fullWidth>
              <TextField
             autoFocus
             margin="dense"
             label="Product description"

             fullWidth
             variant="standard"
              onChange={handleChangeDescription}
            />
            
              </FormControl>
            </FormGroup>
            <FormGroup row={true} sx={{ marginTop: "1em" }}>
              <FormControl fullWidth>
              <TextField
             autoFocus
             margin="dense"
             label="Product categorie"

             fullWidth
             variant="standard"
              onChange={handleChangeCategorie }
            />
            
              </FormControl>
            </FormGroup>
           
            <FormGroup  sx={{ marginTop: "1em" }}>
            <FormControl fullWidth>
            <Input type="file"
            id="fileinput"
            className="photoInput"
            placeholder="the picture.."
            name="image"
            accept="image/*"
            onChange={previewImage}/>
            <img id="output_image" style={{ width: "75px", height: "75px" }} className="create-preview-image" />
              </FormControl>
            </FormGroup>

            <FormGroup row={true} sx={{ marginTop: "1em" }}>
              <FormControl fullWidth>
                <Button
                  onClick={(event) => {
                    createProduct(event);
                  }}
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
