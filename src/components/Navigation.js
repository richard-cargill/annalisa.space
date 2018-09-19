import React from 'react';
import Link from 'gatsby-link';

const Navigation = () => (
  <nav className="nav" aria-label='Site Navigation'>
    <ul className="nav__list" aria-label='Site Navigation'>
      <li className="nav__list__item">
        <Link role='menuitem' to='/work/'>Work</Link>
      </li>
      <li className="nav__list__item">
        <Link role='menuitem' to='/about/'>About</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
