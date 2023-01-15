import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavMenu.module.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const NavMenu = ({ onClickLink }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.links}>
        <Link className={styles.link} to='/home' onClick={onClickLink}>
          Nosotros
        </Link>
        <Link className={styles.link} to='/services' onClick={onClickLink}>
          Servicios
        </Link>
        <Link className={styles.link} to='/contact' onClick={onClickLink}>
          Contacto
        </Link>
      </div>
      <div className={styles.social}>
        <div className={styles.socialBlock}>
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
      </div>
    </div>
  );
};

export default NavMenu;
