import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../posts/postsSlice';
import styles from './SearchBar.module.css';

export function SearchBar() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  return (
    <div className={styles.searchBar}>
      <input
        data-testid='searchbar'
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="button" data-testid='searchbutton' onClick={() => dispatch(setSearchTerm(term))}>Search</button>
    </div>
  );
}
