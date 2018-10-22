import React from 'react'

import HeroPanel from './HeroPanel.js'
import PageSelectorPanel from './PageSelectorPanel.js'
import HeaderPanel from './HeaderPanel.js'
import ImagePanel from './ImagePanel.js'
import ContentPanel from './ContentPanel.js'
import SelectorPanel from './SelectorPanel.js'

function Panels({ type, data }) {
  switch (type) {
    case 'ContentfulHeroPanel':
      return <HeroPanel text={data.text} description={data.description} />
    case 'ContentfulPageSelectorPanel':
      return (
        <PageSelectorPanel
          pagesToDisplay={data.pagesToDisplay}
          text={data.text}
          pages={data.pages}
        />
      )
    case 'ContentfulHeaderPanel':
      return <HeaderPanel text={data.text} media={data.media} />
    case 'ContentfulImagePanel':
      return <ImagePanel media={data.media} fullWidth={data.fullWidth}/>
    case 'ContentfulContentPanel':
      return <ContentPanel html={data.content.childMarkdownRemark.html} />
    case 'ContentfulSelectorPanel':
      return <SelectorPanel text={data.text} pages={data.pages} />
    default:
      return null
  }
}

export default Panels
