import { React, useState, useContext, useEffect } from "react";
import { Context } from "../context/Context";
import EditComment from "./EditComment";
import axios from "axios";
import { Replies } from "./Replies";

export const Forum = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [Updatedcomment, setUpdatedComment] = useState("");
  const { user } = useContext(Context);
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
      const res = await axios
        .get("http://localhost:3000/fetchComments")
        .then((res) => {
          const orgcomm = res.data.reverse();
          setComments(orgcomm);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteComment = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/deleteComment/${id}`);
      alert(" Deleted");
    } catch (err) {
      alert("try again");
    }
  };
  useEffect(() => {
    fetchCommets();
  });
  return (
    <div className={"m-5"}>
      <div className={"row w-80 mt-5"}>
        <div className={"rounded m-5 p-2 bg-light"}>
          <div className="row">
            <h5>Forum</h5>
            <p>Add your comments or open a subject for desccusion.</p>
          </div>
          <form>
            {!user ? (
              <div className="row">
                <div class="col-8 m-3">
                  <label for="exampleInputcomment" class="form-label">
                    Comment
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputcomment"
                  />
                </div>
                <div className="col-4 m-3">
                  <button type="Submit" class="btn btn-primary">
                    Login to Comment
                  </button>
                </div>
              </div>
            ) : (
              <div className="row">
                <div class="col-6 m-3">
                  <label for="exampleInputcomment2" class="form-label">
                    Comment
                  </label>
                  <input
                    id="exampleInputcomment2"
                    placeholder="Enter Your Comment"
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                </div>
                <div className="col-4 m-3">
                  <buuton
                    type="submit"
                    class="btn btn-primary"
                    onClick={createComment}
                  >
                    Add
                  </buuton>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className={"rounded m-5 p-2 bg-light"}>
        <div>
          <h5>Comments here</h5>
          <p>to keep it pro</p>
          {comments.map((comment) => {
            return (
              <div
                style={{
                  maxWidth: 1000,
                  padding: "20px 5px",
                  margin: " 50px auto",
                }}
              >
                <div>
                  <div container spacing={2}>
                    <div item xs={8}>
                      <h5>{comment.user}</h5>
                      <p>{comment.comment}</p>
                    </div>
                    <div item xs={4}>
                      {user[0].username === comment.user ? (
                        <>
                          {" "}
                          <EditComment commentid={comment._id} />{" "}
                          <button
                            onClick={() => {
                              deleteComment(comment._id);
                            }}
                          >
                            Delete
                          </button>{" "}
                        </>
                      ) : null}
                      <Replies
                        commentid={comment._id}
                        sx={{ maxWidth: 1000 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
