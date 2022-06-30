import React from 'react';
import styles from './Post.module.css';

export function Post({ title, topic, media, mediaType, id }) {
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
    <div className={styles.post} title={title} data-testid={`post${id}`}>
      <div>
        <br />
        <h3>{title}</h3>
        /r/{topic}
        <br /><br />
        {thumbnail}
      </div>
    </div>
  );
}
