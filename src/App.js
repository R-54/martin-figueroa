import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
