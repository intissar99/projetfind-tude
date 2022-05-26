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
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const useStyle = makeStyles({
  table: {
    width: "100%",
    margin: "100px 0 0 0",
    position: "flex ",
    top: 0

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

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>



        <Grid item xs={8}>

          <Table className={classes.table}>
            <TableHead>
              <TableRow className={classes.thead}>


                <TableCell> name</TableCell>
                <TableCell>price</TableCell>
                <TableCell>categorie</TableCell>

                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                Products.map((product) => (
                  <TableRow className={classes.row}>

                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.categorie}</TableCell>

                    <TableCell>
                      <Button variant="contained" color="primary" style={{ marginRight: 10 }}  ></Button>
                      <Button variant="contained" color="secondary"  >delete</Button>
                    </TableCell>
                  </TableRow>
                ))
              }

            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Box>

  )

}
export default ListProduct;