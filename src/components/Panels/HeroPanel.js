import React from 'react'

const HeroPanel = ({ text, description }) => (
  <section className="panel hero container limit-width">
    <div className="hero__wrap">
      <h1 className="hero__title">{text}</h1>
      <p className="hero__content">{description}</p>
    </div>
  </section>
)

export default HeroPanel
