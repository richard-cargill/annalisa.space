import React from 'react'
import Carousel from 'nuka-carousel'

const SliderPanel = ({ slides, fullWidth }) => {
  const imageClass = `container imagePanel panel ${
    fullWidth !== true ? 'limit-width' : ''
  }`
  return (
    <section className={imageClass}>
      {slides && (
        <Carousel wrapAround={true}>
          {slides.map((slide, i) => {
            if (slide && slide.file) {
              return (
                <img key={i} alt={slide.description} src={slide.file.url} />
              )
            } else {
              return null
            }
          })}
        </Carousel>
      )}
    </section>
  )
}

export default SliderPanel
