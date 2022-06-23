import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, setTopic, selectPosts, setSearchTerm } from './postsSlice';
import styles from './Posts.module.css';
import { Post } from '../post/Post';

export function Posts() {
    const posts = useSelector(selectPosts);
    let topic = '';
    console.log('posts = ', posts);
    const dispatch = useDispatch();
    //   const [incrementAmount, setIncrementAmount] = useState('2');
    //   const incrementValue = Number(incrementAmount) || 0;

    useEffect(() => {
        console.log('mounted!');
        dispatch(addPost({ id: 1, title: 'Post1', text: 'text1', topic: 'dog' }));
        dispatch(addPost({ id: 2, title: 'Post2', text: 'text2', topic: 'cat' }));
        dispatch(addPost({ id: 3, title: 'Post3', text: 'text3', topic: 'dog' }));
        dispatch(addPost({ id: 4, title: 'Post4', text: 'text4', topic: 'cat' }));
        dispatch(addPost({ id: 5, title: 'Post5', text: 'text5', topic: 'dog' }));
        dispatch(addPost({ id: 6, title: 'Post6', text: 'text6', topic: 'dog' }));
        dispatch(addPost({ id: 7, title: 'Post7', text: 'text7', topic: 'cat' }));
        dispatch(addPost({ id: 8, title: 'Post8', text: 'text8', topic: 'dog' }));
    }, []);


    topic = posts.topic;
    console.log('topic = ', topic);
    let selectedPosts = Object.entries(posts.collection);
    if (topic) {
        selectedPosts = selectedPosts.filter(post => post[1].topic === topic);
        console.log('selectedPosts = ', selectedPosts);
    }
    console.log('selectedPosts = ', selectedPosts);


    let searchTerm = posts.searchTerm;
    console.log('searchTerm = ', searchTerm);
    if (searchTerm) {
        selectedPosts = selectedPosts.filter(post => post[1].text.includes(searchTerm));
        console.log('selectedPosts = ', selectedPosts);
    }
    console.log('selectedPosts = ', selectedPosts);



    return (
        <div className={styles.posts}>
            <div>
                Posts:
                {selectedPosts.map((post, i) => <Post title={post[1].title} text={post[1].text} key={i} />)}
                {console.log(Object.entries(posts.collection))}
            </div>
        </div>
    );
}
