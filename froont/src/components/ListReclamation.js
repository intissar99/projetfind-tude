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
  const classes = useStyle();
  const [Reclamation, setRec] = useState([]);
  const [UsersRec, setUsersRec] = useState([]);
  const [ids, setIds] = useState([]);
  //includes: va verifier si l'argument est inclus dans le tableau "UserId" dans ce cas 
  const fetchReclamations = async () => {

    try {
      const res = await axios.get("http://localhost:3000/fetchReclamation").then((res) => {
        setRec(res.data);
        { res.data.map((recla) => { if (recla.user && !(ids.includes(recla.user))) ids.push(recla.user) }) }
      });
      console.log("22222", ids);

      const resultat = await axios.post("http://localhost:3000/fetchUserOfRec", { ids }).then((res) => {
        setUsersRec(res.data);

      })
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
  console.log(UsersRec)
  console.log(Reclamation);
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
                <TableCell>user</TableCell>
                <TableCell>subject</TableCell>
                <TableCell>Read</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                Reclamation.map((reclamation, i) => (
                  <TableRow className={classes.row}>
                    {console.log(UsersRec[0]._id)}
                    {console.log(reclamation.user)}

                    <TableCell>{(UsersRec[i]._id) === reclamation.user ? <p>{UsersRec[i].email}</p> : <p>unknown user</p>}</TableCell>
                    <TableCell>{reclamation.subject}</TableCell>
                    <TableCell>{reclamation.message}</TableCell>


                    <TableCell>
                      <Button variant="contained" color="primary" style={{ marginRight: 10 }}  >Read more </Button>
                      <Button variant="contained" color="secondary" onClick={() => { deleteReclamation(reclamation._id) }} >delete</Button>
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