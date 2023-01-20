import React from 'react';
import styles from './Footer.module.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <div className={styles.icon}>
          <WhatsAppIcon fontSize='inherit' />
        </div>
        <div className={styles.icon}>
          <FacebookIcon fontSize='inherit' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
