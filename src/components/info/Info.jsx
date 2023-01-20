import React from 'react';
import styles from './Info.module.css';

import Button from '../button/Button';

const Info = ({
  align = 'left',
  title,
  image,
  showButton,
  buttonText = '',
  text,
}) => {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className={styles.info}
    >
      <h2 className={styles.header}>{title}</h2>
      <p className={styles.content}>{text}</p>
      {showButton && <Button text={buttonText} />}
    </section>
  );
};

export default Info;
