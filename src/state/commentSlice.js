import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// export interface Comments {
//     comments: string[];
// }
const initialState = {
    comments: []
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment: (state, action) => {
           state.comments.push(action.payload); 
        }
    }
})

export const {addComment} = commentSlice.actions;

export default commentSlice.reducer;
