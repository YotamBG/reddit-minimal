import React from 'react';
import styles from './Post.module.css';

export function Post({ title, topic, media, mediaType }) {
  let thumbnail = '';
  if (mediaType === 'video') {
    thumbnail = (<video width="70%" controls>
      <source src={media} />
    </video>);
  }
  if (mediaType === 'picture') {
    thumbnail = <img src={media} alt='thumbnail' width="70%" />;
  }
  return (
    <div className={styles.post} title={title}>
      <div>
        {title}
        <br /><br />
        {topic}
        <br /><br />
        {thumbnail}
      </div>
    </div>
  );
}
