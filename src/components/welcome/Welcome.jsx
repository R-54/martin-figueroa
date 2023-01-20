import React from 'react';
import styles from './Welcome.module.css';

import Button from '../button/Button';
import logo from '../../assets/images/logo.jfif';

const Welcome = ({ header, image, showButton, buttonText = '', text }) => {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className={styles.welcome}
    >
      {header && <h2 className={styles.header}>{header}</h2>}
      {!header && <img className={styles.logo} src={logo} alt='logo' />}
      <p className={styles.content}>{text}</p>
      {showButton && <Button text={buttonText} />}
    </section>
  );
};

export default Welcome;
