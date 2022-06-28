import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, fetchPosts, selectPosts } from './postsSlice';
import styles from './Posts.module.css';
import { Post } from '../post/Post';

export function Posts() {
    const posts = useSelector(selectPosts);
    let topic = posts.topic;
    let searchTerm = posts.searchTerm;
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts({topic: topic, searchTerm: searchTerm}));
    }, [topic, searchTerm]);

    useEffect(() => {
        if (posts.status === 'Loaded') {
            let loadedPosts = posts.response;
            loadedPosts.forEach((post, i) => {
                let media = '';
                let mediaType = 'none';
                if (post.media && post.media.reddit_video) {
                    media = post.media.reddit_video.fallback_url;
                    mediaType = 'video';
                } else if (post.url.includes('.jpg')) {
                    media = post.url;
                    mediaType = 'picture';
                }
                dispatch(addPost({ id: i, title: post.title, media: media, mediaType: mediaType, topic: post.subreddit }));
            });
        }
    }, [posts.status]);


    let selectedPosts = Object.entries(posts.collection);
    return (
        <div className={styles.posts}>
            <div>
                {selectedPosts.map((post, i) => <Post title={post[1].title} media={post[1].media} mediaType={post[1].mediaType} topic={post[1].topic} key={i} />)}
            </div>
        </div>
    );
}
