import React from 'react';
import Link from 'gatsby-link';

const PageSelectorPanel = ({ text, pages }) => (
  <section className="panel pageSelector container">
    <h2>{text}</h2>
    <div className="pageSelector__items">
    {pages.map(page => {
      const {
        thumbnail,
        name,
        slug,
        description
      } = page;

      return (<article className="pageSelector__item" key={name}>
        {thumbnail && <img src={thumbnail.file.url} /> }
        <h3>
          {password
            ? (<span>{name}</span>)
            : (<Link to={slug}>{name}</Link>)
          }
        </h3>
        {description && <p>{description}</p>}
      </article>);
    })}
    </div>
  </section>
);

export default PageSelectorPanel;
