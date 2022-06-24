import React from 'react';
import styles from './Header.module.css';
import { SearchBar } from '../searchBar/SearchBar';

export function Header() {
  return (
    <div className={styles.header}>
        <div>
          Header:
          < SearchBar />
        </div>
    </div>
  );
}
