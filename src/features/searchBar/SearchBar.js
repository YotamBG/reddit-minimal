import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../posts/postsSlice';
import styles from './SearchBar.module.css';

export function SearchBar() {
  const dispatch = useDispatch();

  return (
    <div className={styles.searchBar}>
      <input
        data-testid='searchbar'
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </div>
  );
}
