import React from 'react';

const ContentPanel = ({ html }) => (
  <section>
    <div dangerouslySetInnerHTML={{__html: html}} />
  </section>
);

export default ContentPanel;
