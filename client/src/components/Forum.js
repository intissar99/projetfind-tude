import { React, useState, useContext, useEffect } from "react";
import { Context } from "../context/Context"
import {
    Box,
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
} from "@material-ui/core";
import axios from "axios";
import { Replies } from "./Replies";


export const Forum = () => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false)
    const { user } = useContext(Context)

    const createComment = async (event) => {
        event.preventDefault();
        console.log(user);
        try {
            const res = axios.post("http://localhost:3000/comment", {
                comment: comment,
                user: user[0].username,
            });
            alert("Comment Added");
            console.log(res);
        } catch (error) {
            alert("Failed to comment");
        }
    };
    const fetchCommets = async () => {
        try {
            const res = await axios.get("http://localhost:3000/fetchComments").then((res) => {
                setComments(res.data);
            });
        }
        catch (error) {
            console.log(error)
        };
    }
    console.log(comments);

    useEffect(() => {
        fetchCommets();
    });

    return (
        <div> <Grid>
            <Card style={{ maxWidth: 1000, padding: "20px 5px", margin: " 90px auto" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Forum
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        gutterBottom
                    >
                        Add your comments or open a subject for desccusion.
                    </Typography>
                    <form >

                        {
                            !user ? <Grid container spacing={1}>
                                <Grid item xs={12} >
                                    <TextField
                                        name="name"
                                        placeholder="Enter name"
                                        label="Comment"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        disabled
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="ADD"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        disabled

                                    >
                                        Login to comment
                                    </Button>
                                </Grid>
                            </Grid> :
                                <Grid container spacing={1}>
                                    <Grid item xs={12} >
                                        <TextField
                                            name="name"
                                            placeholder="Enter name"
                                            label="Comment"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            onChange={(e) => setComment(e.target.value)}

                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Button
                                            type="ADD"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            onClick={createComment}
                                        >
                                            Add
                                        </Button>
                                    </Grid>
                                </Grid>
                        }
                    </form>
                </CardContent>
            </Card>
            <Card style={{ maxWidth: 1000, padding: "20px 5px", margin: " 90px auto" }}>
                <CardContent>
                    <Typography style={{ bgcolor: "info" }} gutterBottom variant="h5">
                        Comments here
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        gutterBottom
                    >
                        please keep -18 guys
                    </Typography>
                    {
                        comments.map((comment) => {
                            return (
                                <Card style={{ maxWidth: 1000, padding: "20px 5px", margin: " 90px auto" }}>
                                    <CardContent>
                                        <Typography style={{ bgcolor: "info" }} gutterBottom variant="h5">
                                            {comment.user}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                            gutterBottom
                                        >
                                            {comment.comment}
                                        </Typography>
                                        {/* <Box
                                            m={1}
                                            display="flex"
                                            justifyContent="flex-end"
                                            alignItems="flex-end"
                                            sx={"boxDefault"}
                                        > */}
                                        {show ? <Replies sx={{ maxWidth: 1000 }} /> : <Button variant="outlined" onClick={() => setShow(true)} color="primary" sx={{ height: 40 }}>
                                            REPLY
                                        </Button>}

                                        {/* </Box> */}

                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                </CardContent>
            </Card>
        </Grid>
        </div>
    )
}
