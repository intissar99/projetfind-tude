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

function ListReclamation() {
  const [Reclamation, setRec]= useState([]);
  
  const [UsersRec,setUsersRec]=useState([]);
const userId= []
//includes: va verifier si l'argument est inclus dans le tableau "UserId" dans ce cas 


  const classes = useStyle();
  
  const fetchReclamations = async() => {

   try {const res = await axios.get("http://localhost:3000/fetchReclamation").then((res) => {
        setRec(res.data);
        {res.data.map((recla)=>{ if (recla.user && !(userId.includes(recla.user)))userId.push(recla.user)})}
        console.log(userId)  
  });
  const resultat = await axios.get("http://localhost:3000/fetchUserOfRec",userId).then((res) => {
        setUsersRec(res.data);

    })}
    catch(error){
console.log(error)
    };}
    console.log(UsersRec)
  //useffect : only render when the user open the page where the function is used 
  useEffect(() => {
    fetchReclamations();
  });

  console.log(Reclamation);


  const deleteReclamation = async (id) => {

    try {
      await axios.delete(`http://localhost:3000/deleteReclamation/${id}`)
      alert(" Deleted");
    }
    catch (err) {
      alert("try again")
    }

  };
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
                Reclamation.map((reclamation) => (
                  <TableRow className={classes.row}>

                    <TableCell>{reclamation.subject}</TableCell>
                    <TableCell>{reclamation.message}</TableCell>
                    
                    

                    <TableCell>
                      <Button variant="contained" color="primary" style={{ marginRight: 10 }}  >Read more </Button>
                      <Button variant="contained" color="secondary" onClick={() => {deleteReclamation(reclamation._id)   }} >delete</Button>
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
export default ListReclamation;