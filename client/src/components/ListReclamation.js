import { React, useEffect, useState, useContext } from "react";
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
import { Context } from "../context/Context"

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

function ListReclamation() {
  const classes = useStyle();
  const [Reclamation, setRec] = useState([]);
  //includes: va verifier si l'argument est inclus dans le tableau "User" dans ce cas 
  //includes: va verifier si l'argument est inclus dans le tableau "UserId" dans ce cas 
  const fetchReclamations = async () => {
    try {
      const res = await axios.get("http://localhost:3000/fetchReclamation").then((res) => {
        setRec(res.data);
       
       
      });
    
      

    }
    catch (error) {
      console.log(error)
    };
  }
 
  

  const deleteReclamation = async (id) => {

    try {
      await axios.delete(`http://localhost:3000/deleteReclamation/${id}`)
      alert(" Deleted");
    }
    catch (err) {
      alert("try again")
    }

  };
  //useffect : only render when the user open the page where the function is used
  useEffect(() => {

    fetchReclamations();
  });
  
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
              <TableCell>email</TableCell>
                <TableCell>user</TableCell>
                <TableCell>subject</TableCell>
                <TableCell>Read</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                Reclamation.map((recla, i) => (
                  <TableRow className={classes.row}>
                    <TableCell>{recla.useremail}</TableCell>
                    <>
                      <TableCell>{recla.subject}</TableCell>
                      <TableCell>{recla.message}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="primary" style={{ marginRight: 10 }}  >Read more </Button>
                        <Button variant="contained" color="secondary" onClick={() => { deleteReclamation(recla._id) }} >delete</Button>
                      </TableCell>
                    </>




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
export default ListReclamation;