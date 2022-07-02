import React from 'react'
import "./commentaire.css"
import CommentaireForum from "./CommentaireForum";
import Commentaire from "./Commentaire";

function Commentaires() {
  return (
    <div className="comments">
    <h3 className="comments-title">Comments</h3>
    <div className="comment-form-title">Write comment</div>
    <CommentaireForum/>
    <div className="comments-container">
     
        <Commentaire/>
    
    </div>
  </div>
  )
}

export default Commentaires