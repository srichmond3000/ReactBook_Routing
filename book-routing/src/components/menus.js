import React from 'react';
import { Link } from 'react-router-dom';

export const MainMenu = () => (
  <nav>
    <Link to='/'>Home | </Link>
    <Link to='about'>About | </Link>
    <Link to='events'>Events | </Link>
    <Link to='products'>Products | </Link>
    <Link to='contact'>Contact</Link>
  </nav>
);

export const AboutMenu = () => (
  <nav>
    <Link to="/about">Company | </Link>
    <Link to="/about/history">History | </Link>
    <Link to="/about/services">Service</Link>
  </nav>
);