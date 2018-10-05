import React from 'react'

const HeaderPanel = ({ text, media }) => {
  const url = !media ? 'none' : `no-repeat url(${media.file.url}) center center`
  return (
    <section
      className="headerPanel"
      style={{
        background: url,
      }}
    >
      <div className="panel container">
        <h1>{text}</h1>
      </div>
    </section>
  )
}

export default HeaderPanel
