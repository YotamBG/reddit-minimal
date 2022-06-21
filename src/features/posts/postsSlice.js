import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collection: {}
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addPost: (state, action) => {
            state.collection[action.payload.id] = {title: action.payload.title, text: action.payload.text};
        }
    }
});

export const { addPost } = postsSlice.actions;

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
