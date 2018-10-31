import React from 'react'

const HeaderPanel = ({ text, media }) => {
  const url =
    media && media.file
      ? `no-repeat url(${media.file.url}) center center`
      : 'none'
  return (
    <section className="panel container headerPanel limit-width">
      <div>
        <h1>{text}</h1>
      </div>
    </section>
  )
}

export default HeaderPanel
