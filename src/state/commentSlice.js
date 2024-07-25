import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// export interface Comments {
//     comments: string[];
// }
const initialState = {
    commentsDetails: []
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment: (state, action) => {
           state.commentsDetails = {
            ...state.commentsDetails,
            ...action.payload
           }
        },
        
    }
})

export const {addComment} = commentSlice.actions;

export default commentSlice.reducer;
