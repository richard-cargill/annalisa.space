import React from 'react'

const ImagePanel = ({ media, fullWidth }) => {
  const imageClass = `container imagePanel panel ${
    fullWidth !== true ? 'limit-width' : ''
  }`

  if (media && media.file) {
    const { file, description } = media

    return (
      <section className={imageClass}>
        <img src={file.url} alt={description} className="imagePanel__img" />
      </section>
    )
  } else {
    return null
  }
}

export default ImagePanel
