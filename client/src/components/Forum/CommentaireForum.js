import React from 'react'
import "./commentaire.css"

function CommentaireForum() {
  return (
    <form>
      <textarea
        className="comment-form-textarea"
        value={text}
        />
      <button className="comment-form-button" >
       submitlabel
      </button>
    
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          
        >
          Cancel
        </button>
     
    </form>
  )
}

export default CommentaireForum