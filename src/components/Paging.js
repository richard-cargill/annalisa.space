import React from 'react';
import Link from 'gatsby-link';

import truncateTextAt from '../utils/truncateTextAt.js';

const Paging = ({prev, next}) => (
  <nav className="paging container" aria-label='Paging'>
    <Link className="paging__item" role='menuitem' to={prev.slug}>
      <small>Previous</small>
      <h4 className="pageSelector__title">{prev.name}</h4>
      <p>{truncateTextAt(prev.description, 100)}</p>
    </Link>
    <Link className="paging__item" role='menuitem' to={next.slug}>
      <small>Next</small>
      <h4 className="pageSelector__title">{next.name}</h4>
      <p>{truncateTextAt(prev.description, 100)}</p>
    </Link>
  </nav>
);

export default Paging;
