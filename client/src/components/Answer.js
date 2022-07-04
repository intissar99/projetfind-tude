import { React, useState, useContext, useEffect } from "react";
import { Context } from "../context/Context";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import axios from "axios";

export const Answer = ({ replyId }) => {
  const [answer, setreply] = useState("");
  const [answers, setanswers] = useState([]);
  const [showEdit, setshowEdit] = useState(false);

  const [show, setShow] = useState(false);
  const { user } = useContext(Context);
  console.log(answers);
  const createAnswer = async (event) => {
    event.preventDefault();
    try {
      console.log(answer, user[0].username, replyId);
      const res = axios.post("http://localhost:3000/answer", {
        answer: answer,
        user: user[0].username,
        replyId: replyId,
      });
      alert("answer Added");
      console.log(res);
    } catch (error) {
      alert("Failed to answer");
    }
  };
  const fetchAnswers = async () => {
    try {
      const res = await axios
        .post("http://localhost:3000/fetchanswer", { replyId: replyId })
        .then((res) => {
          const organs = res.data;
          setanswers(organs);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAnswers();
  });

  return (
    <div>
      {show ? (
        <Grid>
          <Card
            style={{
              maxWidth: 10000,
              padding: "20px 5px",
              margin: " 90px auto",
            }}
          >
            <CardContent>
              <form>
                <Stack spacing={2}>
                  {answers.map((answer) => {
                    return (
                      <Grid item xs={12}>
                        <Typography
                          style={{ bgcolor: "info" }}
                          gutterBottom
                          variant="h5"
                        >
                          {answer.user}
                        </Typography>

                        {showEdit ? (
                          <>
                            
                            <TextField
                              name="reply"
                              placeholder="Enter reply"
                              label="reply"
                              variant="outlined"
                              value={answer.answer}
                              fullWidth
                              required
                            />
                            <Button>Edit </Button>
                          </>
                        ) : (
                          <>
                            <h6
                              variant="body2"
                              color="textSecondary"
                              component="p"
                              gutterBottom
                            >
                              {answer.answer}
                            </h6>{" "}
                            <Button onClick={setshowEdit(true)}> Edit</Button>
                          </>
                        )}
                      </Grid>
                    );
                  })}
                  <Grid item xs={12}>
                    <TextField
                      name="reply"
                      placeholder="Enter reply"
                      label="reply"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => {
                        console.log(e.target.value);
                        setreply(e.target.value);
                      }}
                      required
                    />
                  </Grid>

                  <Button
                    variant="outlined"
                    onClick={createAnswer}
                    color="primary"
                    sx={{ height: 40 }}
                  >
                    ANSWER
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Card>
        </Grid>
      ) : (
        <Button
          variant="none"
          onClick={() => setShow(true)}
          color="primary"
          sx={{ height: 40 }}
        >
          REPLY
        </Button>
      )}
    </div>
  );
};
