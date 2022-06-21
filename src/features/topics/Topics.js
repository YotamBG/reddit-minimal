import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from './topicsSlice';
import styles from './Topics.module.css';

export function Topics() {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

//   const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className={styles.topics}>
        <div>
          Topics
        </div>
    </div>
  );
}
