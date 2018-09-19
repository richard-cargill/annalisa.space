import React from 'react';
import Link from 'gatsby-link';

const PageSelectorPanel = ({ text, pages }) => (
  <section className="panel pageSelector">
    <h2>{text}</h2>
    <div className="pageSelector__items">
    {pages.map(page => {
      return (<article className="pageSelector__item" key={page.name}>
        <img src={page.thumbnail.file.url} />
        <h3>
          <Link to={page.slug}>{page.name}</Link>
        </h3>
        <h4>{page.description}</h4>
      </article>);
    })}
    </div>
  </section>
);

export default PageSelectorPanel;
