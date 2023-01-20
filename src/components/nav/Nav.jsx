import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import NavMenu from './navMenu/NavMenu';
import logo from '../../assets/images/logo.jfif';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOnClickLink = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt={'logo'} />
        </div>
        <div className={styles.menu}>
          <button
            className={styles.menuButton}
            onClick={() => setShowMenu(!showMenu)}
          >
            <MenuIcon color='action' fontSize='inherit' />
          </button>
        </div>
        <div className={styles.sections}>
        <Link className={styles.section} to='/home'>
            Home
          </Link>
          <Link className={styles.section} to='/more'>
            Nosotros
          </Link>
          <Link className={styles.section} to='/services'>
            Servicios
          </Link>
          <Link className={styles.section} to='/contact'>
            Contacto
          </Link>
        </div>
        <div className={styles.social}>
          <div className={styles.icon}>
            <WhatsAppIcon color='action' fontSize='inherit' />
          </div>
          <div className={styles.icon}>
            <FacebookIcon color='action' fontSize='inherit' />
          </div>
        </div>
      </nav>
      {showMenu && <NavMenu onClickLink={handleOnClickLink} />}
    </>
  );
};

export default Nav;
