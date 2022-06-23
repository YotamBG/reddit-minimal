import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTopic } from '../posts/postsSlice';
import { } from './topicSlice';
import styles from './Topic.module.css';

export function Topic({ title }) {
  //   const count = useSelector(selectCount);
    const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState('2');

  //   const incrementValue = Number(incrementAmount) || 0;

  const handleClick = (e) => {
    console.log(title);
    dispatch(setTopic(title));
  };

  return (
    <div className={styles.topic}>
      <div onClick={handleClick}  data-testid={title}>
        {title}
      </div>
    </div>
  );
}
