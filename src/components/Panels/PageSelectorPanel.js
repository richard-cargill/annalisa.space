import React from 'react';
import Link from 'gatsby-link';

const PageSelectorPanel = ({ text, pages }) => (
  <section className="panel pageSelector">
    <h2>{text}</h2>
    <div className="pageSelector__items">
    {pages.map(page => {
      return (<article className="pageSelector__item" key={page.name}>
        <h3>
          <Link to={page.slug}>{page.name}</Link>
        </h3>
      </article>);
    })}
    </div>
  </section>
);

export default PageSelectorPanel;
