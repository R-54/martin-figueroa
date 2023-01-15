import React from 'react';
import styles from './BlockList.module.css';

const BlockList = ({ blocks }) => {
  return (
    <div className={styles.list}>
      {blocks.map(({ title, text, image, id }) => (
        <div
          key={id}
          style={{ backgroundImage: `url(${image})` }}
          className={styles.element}
        >
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default BlockList;
