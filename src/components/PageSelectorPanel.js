import React from 'react';
import Link from 'gatsby-link';

const PageSelectorPanel = ({ text, pages }) => (
  <section>
    <h2>{text}</h2>
    {pages.map(page => {
      return (<div key={page.name}>
        <h3>
          <Link to={page.slug}>{page.name}</Link>
        </h3>
      </div>);
    })}
  </section>
);

export default PageSelectorPanel;
