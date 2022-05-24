import { React, useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar/Sidebar"
import {
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableBody,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyle = makeStyles({
  table: {
    width: "60%",
    margin: "100px 0 0 250px",
   position:"flex ",
   top:0
    
  },
  thead: {
    "& > *": {
      background: "#000000",
      color: "#FFFFFF",
      fontSize: 15,
    },

    row: {
      "& > *": {
        fontSize: 100,
      },
    },
  },
});

function ListProduct() {
  const [Products, setProducts] = useState([]);
  const classes = useStyle();
  const fetchProducts = () => {
    const res = axios.get("http://localhost:3000/fetchProducts").then((res) => {
      setProducts(res.data);
    });
  };
  console.log(Products)
  useEffect(() => {
    fetchProducts();
  });

  console.log(Products);
  return (
    <>
    
    <Sidebar/>
    <Table className={classes.table}>
      <TableHead>
        <TableRow  className={classes.thead}>
          
          
          <TableCell> name</TableCell>
          <TableCell>price</TableCell>
          <TableCell>categorie</TableCell>
          
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          Users.map((product) =>(
            <TableRow className={classes.row}>
             
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.categorie}</TableCell>
             
             <TableCell>
              <Button variant="contained" color="primary" style={{marginRight: 10}}  ></Button> 
              <Button variant="contained" color="secondary"  >delete</Button> 
             </TableCell>
            </TableRow>
          ))
        }
       
      </TableBody>
    </Table>
    </>
  )
  
}
export default ListProduct;