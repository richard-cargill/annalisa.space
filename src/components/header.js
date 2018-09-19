import React from 'react';
import Link from 'gatsby-link';
import Navigation from './Navigation';

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="logo">
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <Navigation />
  </header>
);

export default Header;
