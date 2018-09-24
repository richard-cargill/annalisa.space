import React from 'react';
import Link from 'gatsby-link';

const SelectorPanel = () => (
  <section className='container panel selectorPanel'>
    <h4 className="selectorPanel__header">EXPLORATIONS AND SIDE PROJECTS</h4>
    <div className="selectorPanel__items">
      <div className="selectorPanel__item">
  <div>
        <h4 className="pageSelector__title">Blog</h4>
        <p className="pageSelector__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...</p>
        <Link to="#" className="button">Learn more</Link>
  </div>
      </div>
      <div className="selectorPanel__item">
  <div>
        <h4 className="pageSelector__title">Blog</h4>
        <p className="pageSelector__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...</p>
        <Link to="#" className="button">Learn more</Link>
  </div>
      </div>
    </div>
  </section>
);

export default SelectorPanel;

