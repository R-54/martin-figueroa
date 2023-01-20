import React from 'react';
import styles from './SocialMedia.module.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SocialMedia = ({ image }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={styles.social}>
      <div className={styles.icon}>
        <WhatsAppIcon fontSize='inherit' />
      </div>
      <div className={styles.icon}>
        <FacebookIcon fontSize='inherit' />
      </div>
    </div>
  );
};

export default SocialMedia;
