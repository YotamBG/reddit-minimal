import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from './headerSlice';
import styles from './Header.module.css';

export function Header() {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

//   const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className={styles.header}>
        <div>
          Header
        </div>
    </div>
  );
}
