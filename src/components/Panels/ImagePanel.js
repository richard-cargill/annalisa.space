import React from 'react'

const ImagePanel = ({ src, alt, fullWidth }) => {
  const imageClass = `container imagePanel ${fullWidth !== 'true' ? 'panel' : ''}`;

  return (
    <section className={imageClass}>
      <img src={src} alt={alt} className="imagePanel__img" />
    </section>
  )
}

export default ImagePanel
