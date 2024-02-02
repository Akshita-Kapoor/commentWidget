import { Button, TextField, Container } from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';
import CommentsList from "./comment-list";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../state/commentSlice";
import React from "react";

const CommentsComponent = () => {
  const commentsDetails = useSelector((state) => state.commentsData.comments);
  const dispatch = useDispatch();
  const usingRef = useRef(null);
  const addComments = () => {
    dispatch(addComment(usingRef.current.value));
  };
  return (
    <div className="comments-widget">
      <Container sx={{ maxWidth: 700 }}>
        <div className="comments-section" style={{ margin: "20px" }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Add comments"
            multiline
            maxRows={3}
            fullWidth
            sx={{ m: 0.5, display: "block" }}
            inputRef={usingRef}
          />
          <Button
            variant="contained"
            onClick={addComments}
            endIcon={<PostAddIcon />}
            style={{ float: "right", margin: "20px" }}
          >
            Add Comments
          </Button>
        </div>
        <div className="comments-list" style={{ margin: "20px" }}>
          <CommentsList commentsDetails={commentsDetails} />
        </div>
      </Container>
    </div>
  );
};

export default CommentsComponent;
