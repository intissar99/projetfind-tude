import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
//import 'dotenv/config'
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
  const handleChangeDescription= (event) => {
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
      alert("product bug");
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
        <Box sx={style}>
          <div>
            <TextField
              label="name"
              placeholder="Enter name product"
              fullWidth
              required
              onChange={handleChangeName}
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
              label="name"
              placeholder="description"
              fullWidth
              required
              onChange={handleChangeDescription}
            />
          </div>
          
          <div>
            <TextField
              label="categorie"
              placeholder="Enter categorie"
              fullWidth
              required
              onChange={ handleChangeCategorie}
            />
          </div>
          <div>
            <button
              onClick={(event) => {
                createProduct(event);
              }}
            >
              {" "}
              submit{" "}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
