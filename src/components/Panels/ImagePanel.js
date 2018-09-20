import React from 'react'

const ImagePanel = ({ src, alt }) => (
  <section className='container'>
    <img src={src} alt={alt} />
  </section>
)

export default ImagePanel;

