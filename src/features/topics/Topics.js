import React from 'react';
import styles from './Topics.module.css';
import {Topic} from '../topic/Topic';

export function Topics() {
  const topics = {
    collection: {
      1: {
        title: 'interestingasfuck',
      },
      2: {
        title: 'WhitePeopleTwitter',
      },
      3: {
        title: 'TheBoys',
      },
      4: {
        title: 'facepalm',
      }
    }
  };

  return (
    <div className={styles.topics}>
      <div>
        {Object.entries(topics.collection).map((topic, i) => <Topic title={topic[1].title} key={i} />)}
      </div>
    </div>
  );
}
