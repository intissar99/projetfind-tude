import React from 'react'

function CommentaireForum() {
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
       submitlabel
      </button>
    
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
     
    </form>
  )
}

export default CommentaireForum