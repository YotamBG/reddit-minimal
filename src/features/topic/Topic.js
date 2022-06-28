import React from 'react';
import { useDispatch } from 'react-redux';
import { setTopic } from '../posts/postsSlice';
import styles from './Topic.module.css';

export function Topic({ title }) { //add a loading state
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setTopic(title));
  };

  return (
    <div className={styles.topic} onClick={handleClick} data-testid={title}>
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
