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
import Stack from '@mui/material/Stack';
import axios from "axios";

export const Replies = ({ commentid }) => {
    const [reply, setreply] = useState("");
    const [replies, setreplies] = useState([]);
    const [show, setShow] = useState(false)

    console.log(replies);
    console.log(commentid);

    const { user } = useContext(Context)
    const createReply = async (event) => {
        event.preventDefault();
        try {
            const res = axios.post("http://localhost:3000/replies", {
                reply: reply,
                user: user[0].username,
                comment: commentid
            });
            alert("reply Added");
            console.log(res);
        } catch (error) {
            alert("Failed to reply");
        }
    };
    const fetchReplies = async () => {
        try {
            const res = await axios.post("http://localhost:3000/fetchReplies", { commentId: commentid }).then((res) => {
                setreplies(res.data);
            });
        }
        catch (error) {
            console.log(error)
        };
    }
    useEffect(() => {
        fetchReplies();
    });

    return (
        <div>
            {show ?
                <Grid>
                    <Card style={{ maxWidth: 10000, padding: "20px 5px", margin: " 90px auto" }}>
                        <CardContent>
                            {/* <Typography style={{ bgcolor: "info" }} gutterBottom variant="h5">
                            yo it's micky
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            gutterBottom
                        >
                            cool
                        </Typography> */}
                            <form>
                                <Stack spacing={2}>
                                    {replies.map((reply) => {
                                        return (
                                            <Grid item xs={12} >
                                                {/* <Item>Item 1</Item>
                                                <Item>Item 2</Item>
                                                <Item>Item 3</Item> */}
                                                <Typography
                                                    style={{ bgcolor: "info" }} gutterBottom variant="h5"
                                                >
                                                    {reply.user}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p"
                                                    gutterBottom
                                                >
                                                    {reply.reply}
                                                </Typography>
                                            </Grid>)
                                    })}
                                    <Grid item xs={12} >
                                        <TextField
                                            name="reply"
                                            placeholder="Enter reply"
                                            label="reply"
                                            variant="outlined"
                                            fullWidth
                                            onChange={(e) => { console.log(e.target.value); setreply(e.target.value) }}
                                            required

                                        />
                                    </Grid>
                                    <Button variant="outlined" onClick={createReply} color="primary" sx={{ height: 40 }}>
                                        REPLY
                                    </Button>
                                </Stack>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
                : <Button variant="outlined" onClick={() => setShow(true)} color="primary" sx={{ height: 40 }}>
                    REPLY
                </Button>}
        </div>
    )
}
