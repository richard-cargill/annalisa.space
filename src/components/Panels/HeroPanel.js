import React from 'react';

const HeroPanel = ({ text, description }) => (
  <section className="panel hero container">
    <h1 className="hero__title">{text}</h1>
    <p className="hero__content">{description}</p>
  </section>
);

export default HeroPanel;
