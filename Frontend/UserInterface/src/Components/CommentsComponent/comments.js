import "./comments.css";
const CommentsComponent = (props) => {
  const { comments } = props;
  return (
    <div className="comments-container">
      <p className="comments-name">Comment name: {comments.name}</p>
      <p className="comments-text">Description: {comments.comment}</p>
    </div>
  );
};

export default CommentsComponent;
