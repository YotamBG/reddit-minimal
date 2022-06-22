import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, selectPosts } from './postsSlice';
import styles from './Posts.module.css';
import { Post } from '../post/Post';

export function Posts() {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    //   const [incrementAmount, setIncrementAmount] = useState('2');
    //   const incrementValue = Number(incrementAmount) || 0;

    useEffect(() => {
        console.log('mounted!');
        dispatch(addPost({ id: 1, title: 'Post1', text: 'text1' }));
        dispatch(addPost({ id: 2, title: 'Post2', text: 'text2' }));
        dispatch(addPost({ id: 3, title: 'Post3', text: 'text3' }));
        dispatch(addPost({ id: 4, title: 'Post3', text: 'text3' }));
        dispatch(addPost({ id: 5, title: 'Post3', text: 'text3' }));
        dispatch(addPost({ id: 6, title: 'Post3', text: 'text3' }));
        dispatch(addPost({ id: 7, title: 'Post3', text: 'text3' }));
        dispatch(addPost({ id: 8, title: 'Post3', text: 'text3' }));
    }, []);


    return (
        <div className={styles.posts}>
            <div>
                Posts:
                {Object.entries(posts.collection).map((post, i) => <Post title={post[1].title} text={post[1].text} key={i} />)}
                {console.log(Object.entries(posts.collection))}
            </div>
        </div>
    );
}
