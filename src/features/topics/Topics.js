import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { } from './topicsSlice';
import styles from './Topics.module.css';
import {Topic} from '../topic/Topic';

export function Topics() {
  //   const count = useSelector(selectCount);
  //   const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState('2');

  //   const incrementValue = Number(incrementAmount) || 0;

  const topics = {
    collection: {
      1: {
        title: 'dog',
        posts: [1, 2, 3]
      },
      2: {
        title: 'cat',
        posts: [3, 4, 5]
      }
    }
  };

  return (
    <div className={styles.topics}>
      <div>
        Topics:
        {Object.entries(topics.collection).map((topic, i) => <Topic title={topic[1].title} key={i} />)}
      </div>
    </div>
  );
}
