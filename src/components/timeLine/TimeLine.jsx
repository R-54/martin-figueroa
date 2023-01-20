import React from 'react';
import styles from './TimeLine.module.css';

const TimeLine = ({ blocks }) => {
  return (
    <div className={styles.timeLine}>
      <div className={styles.mainTitle}>{'Timeline'}</div>
      <div className={styles.list}>
        {blocks.map(({ title, text, id }) => (
          <div key={id} className={styles.element}>
            <div className={styles.number}>
              <div className={styles.numberBlock}>{id}</div>
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
