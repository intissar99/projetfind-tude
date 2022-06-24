import React from 'react'

function Commentaire() {
  return (
    
    <div className="comment">
    <div className="comment-image-container">
      <img src=""/>
    </div>
    <div className="comment-right-part">
      <div className="comment-content">
        <div className="comment-author">username</div>
        <div>abc</div>
      </div>
       <div className="comment-text">comment</div>
     
        <CommentaireForum />
      
      <div className="comment-actions">
       
          <div
            className="comment-action"
            
          >
            Reply
          </div>
       
        
          <div className="comment-action">
            Edit
          </div>
       
          <div className="comment-action">
            Delete
          </div>
       
      </div>
      
        <CommentaireForum
          
        />
     
     
        <div className="replies">
        
            <Comment/>
         
        </div>
      
    </div>
    </div>

  )
}

export default Commentaire