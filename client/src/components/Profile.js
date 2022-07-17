import { React, useContext } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  type,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import { Context } from "../context/Context"
import Edit from "./Edit"

function Profile() {
  const { user } = useContext(Context)
  console.log(user)
  return (
    <div>
      <Grid>
        <Card
          style={{ maxWidth: 850, padding: "20px 5px", margin: " 90px auto" }}
        >
          <CardContent>
            <Typography gutterBottom variant="h2">
              Profile
            </Typography>
            <img
              // src={user[0].picture}
              style={{ width: "50px", height: "50px" }}
              alt=""
            />
            <Stack direction="row" spacing={2}>
              <Typography
                color="textSecondary"
                component="p"
                gutterBottom
                variant="h5"
              >
                Fullname
              </Typography>
              <Typography
                color="textSecondary"
                component="p"
                gutterBottom
                variant="h6"
              >
                {user[0].fullname}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography
                color="textSecondary"
                component="p"
                gutterBottom
                variant="h5"
              >
                Username
              </Typography>
              <Typography
                color="textSecondary"
                component="p"
                gutterBottom
                variant="h6"
              >
                {user[0].username}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography

                color="textSecondary"
                component="p"
                gutterBottom
                variant="h5"
              >
                Email
              </Typography>
              <Typography

                color="textSecondary"
                component="p"
                gutterBottom
                variant="h6"
              >
                {user[0].email}
              </Typography>
            </Stack>
          </CardContent>
          <Edit user={user[0]} />
        </Card>
      </Grid>
    </div>
  );
}

export default Profile;
