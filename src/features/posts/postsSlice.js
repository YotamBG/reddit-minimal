import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import Reddit from '../reddit/Reddit';

const initialState = {
    collection: {},
    topic: 'popular',
    searchTerm: '',
    status: '',
    response: ''
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ({ topic, searchTerm }) => {
    const posts = await Reddit.fetchPosts(topic, searchTerm);
    return posts;
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.collection[action.payload.id] = {
                title: action.payload.title,
                media: action.payload.media,
                mediaType: action.payload.mediaType,
                topic: action.payload.topic
            };
        },
        setTopic: (state, action) => {
            state.topic = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
        // add a clearPosts method? or add an addPosts to additional 25?
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.rejected, (state) => {
                alert('Request was rejected, please try diffrent search term or subreddit.');
                state.status = 'Rejected';
            })
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'Loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.response = action.payload;
                state.status = 'Loaded';
            });
    },
});


export const { addPost, addPosts, setTopic, setSearchTerm } = postsSlice.actions;

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
