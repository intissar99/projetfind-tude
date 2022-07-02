import React from "react";
import "./commentaire.css";

function CommentaireForum() {
  return (
    <form>
      <textarea className="comment-form-textarea" />
      <button className="comment-form-button">submitlabel</button>

      <button
        type="button"
        className="comment-form-button comment-form-cancel-button"
      >
        Cancel
      </button>
    </form>
  );
}

export default CommentaireForum;
