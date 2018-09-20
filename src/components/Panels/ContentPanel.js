import React from 'react';

const ContentPanel = ({ html }) => (
  <section className='container'>
    <div dangerouslySetInnerHTML={{__html: html}} />
  </section>
);

export default ContentPanel;
