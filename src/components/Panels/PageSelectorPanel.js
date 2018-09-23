import React from 'react';
import Link from 'gatsby-link';

function truncateTextAt(text, length) {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  } else {
    return text;
  }
}

const PageSelectorPanel = ({ text, pages }) => (
  <section className="panel pageSelector container">
    <div className="pageSelector__items">
    {pages.map(page => {
      const {
        name,
        slug,
        description
      } = page;

      return (<article className="pageSelector__item" key={name}>
        <Link className="pageSelector__a" to={slug}>
          <h3 className="pageSelector__title">
            {name}
          </h3>
          {description && <p className="pageSelector__content">{truncateTextAt(description, 100)}</p>}
        </Link>
      </article>);
    })}
    </div>
  </section>
);

export default PageSelectorPanel;
