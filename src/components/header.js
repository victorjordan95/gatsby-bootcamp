import React from 'react';
import { Link } from 'gatsby';

// import './header.module.scss'

import headerStyles from './header.module.scss';

const Header = () => {
  return (
    <nav className={headerStyles.header}>
      <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
      <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
      <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
      <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
    </nav>
  )
}

export default Header;