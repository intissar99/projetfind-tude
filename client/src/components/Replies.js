import { React, useState, useContext, useEffect } from "react";
import { Context } from "../context/Context"
import {
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
} from "@material-ui/core";
import Stack from '@mui/material/Stack';
import axios from "axios";
import { Answer } from "./Answer";

export const Replies = ({ commentid }) => {
    const [reply, setreply] = useState("");
    const [replies, setreplies] = useState([]);
    const [show, setShow] = useState(false)
    const [y, sety] = useState(true)

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
                const orgrep = res.data.reverse()
                setreplies(orgrep);
            });
        }
        catch (error) {
            console.log(error)
        };
    }
    const deleteReply = async (id) => {

        try {
            await axios.delete(`http://localhost:3000/deleteReply/${id}`)
            alert(" Deleted");
        }
        catch (err) {
            alert("try again")
        }

    };
    useEffect(() => {
        fetchReplies();
    });

    return (
        <div>
            {show ?
                <Grid>
                    <Card style={{ maxWidth: 10000, padding: "20px 5px", margin: " 90px auto" }}>
                        <CardContent>
                            <form>
                                <Stack spacing={2}>
                                    {replies.map((reply, i) => {
                                        return (

                                            <Grid item xs={12} >
                                                <Typography
                                                    style={{ bgcolor: "info" }} gutterBottom variant="h5"
                                                >
                                                    {reply.user}
                                                </Typography>

                                                {
                                                    y ? <Grid>
                                                        <Typography
                                                            variant="body2"
                                                            color="textSecondary"
                                                            component="p"
                                                            gutterBottom
                                                        >
                                                            {reply.reply}
                                                            <Answer replyId={reply._id} />
                                                            {
                                                                user[0].username === reply.user ?
                                                                    <>
                                                                        <Button variant="outlined" onClick={() => sety(false)}>
                                                                            EDIT REPLY
                                                                        </Button>
                                                                        <Button variant="outlined" onClick={() => { deleteReply(reply._id) }}>
                                                                            DELETE
                                                                        </Button>
                                                                    </> : null
                                                            }

                                                        </Typography>
                                                    </Grid> : <Grid>
                                                        <TextField
                                                            name="reply"
                                                            placeholder="Enter reply"
                                                            label="reply"
                                                            variant="outlined"
                                                            fullWidth
                                                            value={reply.reply}
                                                            required
                                                        />
                                                        <Button >
                                                            subbmit YOUR reply
                                                        </Button>
                                                    </Grid>
                                                }

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
