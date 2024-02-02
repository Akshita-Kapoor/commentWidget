import CommentsInline from './comments';
import './styles.css';

const CommentsList = (comments) => {
  const { commentsDetails } = comments;
  console.log("c", comments && comments.commentsDetails);

  return (
    <div className="comments-list">
      {commentsDetails.length > 0 &&
        commentsDetails.map((item) => (
          <div>
            <CommentsInline item={item} />
          </div>
        ))}
    </div>
  );
};

export default CommentsList;
