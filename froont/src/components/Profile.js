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

function Profile() {
  const {user} = useContext(Context)
  console.log(user[0])
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
            <Stack direction="row" spacing={50}>
              <Typography
                
                color="textSecondary"
                component="p"
                gutterBottom
                variant="h3"
              >
                {user[0].fullname}
              </Typography>
              <input type="text" placeholder="name" />
            </Stack>
            <Stack direction="row" spacing={38}>
              <Typography
               
                color="textSecondary"
                component="p"
                gutterBottom
                variant="h3"
              >
                {user[0].username}
              </Typography>
              <input type="text" placeholder="username" />
            </Stack>
            <Stack direction="row" spacing={50}>
              <Typography
                
                color="textSecondary"
                component="p"
                gutterBottom
                variant="h3"
              >
                {user[0].email}
              </Typography>

              <input type="text" placeholder="email" />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Profile;
