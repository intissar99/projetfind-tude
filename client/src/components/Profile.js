import{React,useContext}  from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  type,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import {Context} from "../context/Context"
import EditUser from "./EditUser"

function Profile() {
  const {user} = useContext(Context)
  console.log(user)
  return (
    <div>
      <Grid>
        <Card
          style={{ maxWidth: 1200, padding: "20px 5px", margin: " 90px auto" }}
        >
          <CardContent>
            <Typography gutterBottom variant="h2">
              profile
            </Typography>
            <img
              src="https://images.pexels.com/photos/11780921/pexels-photo-11780921.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              style={{ width: "50px", height: "50px" }}
            />
            
              <Typography
                
                color="textSecondary"
                component="p"
                gutterBottom
                variant="h3"
              >
                {user[0].fullname}
              </Typography>
             
           
           
              <Typography
               
                color="textSecondary"
                component="p"
                gutterBottom
                variant="h3"
              >
                {user[0].username}
              </Typography>
             
              <Typography
                
                color="textSecondary"
                component="p"
                gutterBottom
                variant="h3"
              >
                {user[0].email}
              </Typography>

             
          </CardContent>
          <EditUser user={user[0]}/>
        </Card>
      </Grid>
    </div>
  );
}

export default Profile;
