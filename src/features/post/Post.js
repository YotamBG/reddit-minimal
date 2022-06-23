import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from './postSlice';
import styles from './Post.module.css';

export function Post({title, text}) {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

//   const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className={styles.post} title={title}>
        <div>
          {title}
          <br />
          {text}
        </div>
    </div>
  );
}
