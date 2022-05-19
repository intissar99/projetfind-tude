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

function ListUsers() {
  const [Users, setUsers] = useState([]);
  const classes = useStyle();
  const fetchUsers = () => {
    const res = axios.get("http://localhost:3000/fetchUsers").then((res) => {
      setUsers(res.data);
    });
  };
  useEffect(() => {
    fetchUsers();
  });

  console.log(Users);
  return (
    <>
    
    <Sidebar/>
    <Table className={classes.table}>
      <TableHead>
        <TableRow  className={classes.thead}>
          
          
          <TableCell> fullname</TableCell>
          <TableCell>username</TableCell>
          <TableCell>email</TableCell>
          
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          Users.map((user) =>(
            <TableRow className={classes.row}>
             
              <TableCell>{user.fullname}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
             
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
export default ListUsers;
