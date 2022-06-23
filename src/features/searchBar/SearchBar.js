import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../posts/postsSlice';
import { } from './searchBarSlice';
import styles from './SearchBar.module.css';

export function SearchBar() {
  //   const count = useSelector(selectCount);
  const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState('2');

  //   const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className={styles.searchBar}>
      <input
        data-testid='searchbar'
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </div>
  );
}
