import React from 'react'

const ContentPanel = ({ html }) => (
  <section className="container panel content">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </section>
)

export default ContentPanel
