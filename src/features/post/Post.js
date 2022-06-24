import React from 'react';
import styles from './Post.module.css';

export function Post({title, text}) {
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
