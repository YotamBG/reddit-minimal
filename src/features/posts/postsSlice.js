import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collection: {},
    topic : '',
    searchTerm : ''
    // add a selectedPosts array?
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.collection[action.payload.id] = {title: action.payload.title, text: action.payload.text, topic: action.payload.topic};
        },
        setTopic: (state, action) => {
            state.topic = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
});

export const { addPost, setTopic, setSearchTerm } = postsSlice.actions;

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
