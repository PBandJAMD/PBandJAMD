import React from 'react';
import CommentTemplate from '../CommentTemplate/CommentTemplate.jsx';
import './CommentContainer.css';


const CommentContainer = props => (
  <div id="comment-template">
    <button onClick={() => props.changeComponent(0)}>Click to return!</button>
  </div>
);

// const CommentContainer = props => {
//   const comments = props.comments.map((comment) => {
//     return (
//       <CommentTemplate
//         key={comment.id.toString()}
//         // id={comment.id}
//         topic_id={comment.topic_id}
//         body={comment.body}
//         date_created={comment.date_created}
//         user_id={comment.user_id}
//       />
//     );
//   });

//   return (
//     <div id="comments-container">
//       {comments}
//     </div>
//   );
// };

export default CommentContainer;
