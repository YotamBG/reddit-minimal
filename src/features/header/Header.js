import React from 'react';
import styles from './Header.module.css';
import { SearchBar } from '../searchBar/SearchBar';
import logo from './logo.png';

export function Header() {

  return (
    <div className={styles.header}>
      <div onClick={() => window.location.reload(false)}>
        <img src={logo} alt='logo' width="40px" />
        <h2>Reddit Minimal</h2>
      </div>
      <div>
        < SearchBar />
      </div>
    </div>
  );
}
