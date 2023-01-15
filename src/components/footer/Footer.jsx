import React from 'react';
import styles from './Footer.module.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <div className={styles.icon}>
          <WhatsAppIcon />
        </div>
        <div className={styles.icon}>
          <FacebookIcon />
        </div>
        <div className={styles.icon}>
          <InstagramIcon />
        </div>
      </div>
      <p className={styles.logo}>Martin Figueroa</p>
    </footer>
  );
};

export default Footer;
