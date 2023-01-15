import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <main className='app'>
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
