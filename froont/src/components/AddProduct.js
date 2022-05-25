import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios' ;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};
const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
export default function AddProduct() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currency, setCurrency] = React.useState('EUR');
  const [name, setName] = React.useState();
  const [price, setPrice] = React.useState();
  const [categorie, setCategorie] = React.useState();
  


  

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleChangeCategorie = (event) => {
    setCategorie(event.target.value);
  };
  const createProduct=async (event)=> {
    event.preventDefault()
    try {
      axios.post("http://localhost:3000/createProduct", {
        name: name,
        price: price,
        categorie: categorie,
        
      })
      alert("product bug");
    }catch(error){
        alert("try again");
      }
  }

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
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          
          onChange={handleChange}
          value={currency}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div>
        <button onClick={createProduct()}> submit </button>
        </div>
        
          

        </Box>
      </Modal>
    </div>
  );
}