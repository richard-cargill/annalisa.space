import React from 'react';
import Link from 'gatsby-link';

const Paging = ({prev, next}) => (
  <nav className="paging" aria-label='Paging'>
    <Link className="paging__item" role='menuitem' to={prev.slug}>
      <small>Previous</small>
      <h4>{prev.name}</h4>
      <p>{prev.description}</p>
    </Link>
    <Link className="paging__item" role='menuitem' to={next.slug}>
      <small>Next</small>
      <h4>{next.name}</h4>
      <p>{prev.description}</p>
    </Link>
  </nav>
);

export default Paging;
