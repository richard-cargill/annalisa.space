import React from 'react';
import Link from 'gatsby-link';

const Navigation = () => (
  <nav aria-label='Site Navigation'>
    <ul aria-label='Site Navigation'>
      <li>
        <Link role='menuitem' to='/work/'>Work</Link>
      </li>
      <li>
        <Link role='menuitem' to='/about/'>About</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
