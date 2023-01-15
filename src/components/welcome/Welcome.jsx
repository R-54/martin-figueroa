import React from 'react';
import styles from './Welcome.module.css';

import Button from '../button/Button';

const Welcome = ({ header = '', image, showButton, buttonText = '', text }) => {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className={styles.welcome}
    >
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.content}>{text}</p>
      {showButton && <Button text={buttonText} />}
    </section>
  );
};

export default Welcome;
