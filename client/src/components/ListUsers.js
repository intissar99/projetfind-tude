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
    width: "60%",
    margin: "100px 0 0 250px",
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

function ListUsers(props) {
  const [Users, setUsers] = useState([]);
  const { users, dispatch } = useContext(Context)
  const classes = useStyle();
  const fetchUsers = () => {
    const res = axios.get("http://localhost:3000/fetchUsers").then((res) => {
      setUsers(res.data);
      dispatch({ type: "addUsers", payload: Users })
    });
  };
  useEffect(() => {
  });
  fetchUsers();

  const deleteUser = async (id) => {

    try {
      await axios.delete(`http://localhost:3000/deleteUsers/${id}`)
      alert("user deleted");
    }
    catch (err) {
      alert("try again")
    }

  };
  console.log("userscontext list usersers", users);

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


                <TableCell> fullname</TableCell>
                <TableCell>username</TableCell>
                <TableCell>email</TableCell>

                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                Users.map((user) => (
                  <TableRow className={classes.row}>

                    <TableCell>{user.fullname}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>

                    <TableCell>
                      <Button variant="contained" color="primary" style={{ marginRight: 10 }}  ></Button>
                      <Button variant="contained" color="secondary" onClick={() => { deleteUser(user._id) }}>delete</Button>
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
export default ListUsers;
