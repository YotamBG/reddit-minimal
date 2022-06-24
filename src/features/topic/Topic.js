import React from 'react';
import { useDispatch } from 'react-redux';
import { setTopic } from '../posts/postsSlice';
import styles from './Topic.module.css';

export function Topic({ title }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    console.log(title);
    dispatch(setTopic(title));
  };

  return (
    <div className={styles.topic}>
      <div onClick={handleClick} data-testid={title}>
        {title}
      </div>
    </div>
  );
}
