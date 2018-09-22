import React from 'react';
import Link from 'gatsby-link';
import Password from '../Password';

const PageSelectorPanel = ({ text, pages }) => (
  <section className="panel pageSelector container">
    <h2>{text}</h2>
    <div className="pageSelector__items">
    {pages.map(page => {
      const {
        thumbnail,
        name,
        slug,
        description,
        password
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
        {password && <Password url={slug} />}
      </article>);
    })}
    </div>
  </section>
);

export default PageSelectorPanel;
