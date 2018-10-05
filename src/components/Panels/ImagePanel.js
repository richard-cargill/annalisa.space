import React from 'react'

const ImagePanel = ({ src, alt }) => (
  <section className="container imagePanel">
    <img src={src} alt={alt} className="imagePanel__img" />
  </section>
)

export default ImagePanel
