import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from '@mui/material/Avatar';

const CommentsInline = (props) => {
  const { item } = props;
  return (
    <div className="comments-inline">
      <div className="author-comment">
        <Avatar src="/broken-image.jpg" />
        <div className="comment-text">{item}</div>
      </div>
      <div className="comments-action">
        <Button
          variant="text"
          // onClick={addComments}
          endIcon={<SendIcon />}
          size="small"
        >
          Reply
        </Button>
        <Button
          variant="text"
          // onClick={addComments}
          endIcon={<EditIcon />}
          size="small"
        >
          Edit
        </Button>
        <Button
          variant="text"
          // onClick={addComments}
          endIcon={<DeleteIcon />}
          size="small"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CommentsInline;
