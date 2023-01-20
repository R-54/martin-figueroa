import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavMenu.module.css';

import logo from '../../../assets/images/logo.jfif';

const NavMenu = ({ onClickLink }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.links}>
        <Link className={styles.link} to='/home' onClick={onClickLink}>
          Home
        </Link>
        <Link className={styles.link} to='/more' onClick={onClickLink}>
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
        <div className={styles.logo}>
          <img className={styles.logo_image} src={logo} alt={'logo'} />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
