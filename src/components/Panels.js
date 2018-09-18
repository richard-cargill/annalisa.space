import React from "react"

import HeroPanel from "../components/HeroPanel.js";
import PageSelectorPanel from "../components/PageSelectorPanel.js";
import HeaderPanel from "../components/HeaderPanel.js";
import ImagePanel from "../components/ImagePanel.js";
import ContentPanel from "../components/ContentPanel.js";

function Panels({type, data}) {
  switch(type) {
    case 'ContentfulHeroPanel':
      return <HeroPanel text={data.text} />;
    case 'ContentfulPageSelectorPanel':
      return <PageSelectorPanel text={data.text} pages={data.pages} />;
    case 'ContentfulHeaderPanel':
      return <HeaderPanel text={data.text} />;
    case 'ContentfulImagePanel':
      return <ImagePanel src={data.media.file.url} />;
    case 'ContentfulContentPanel':
      return <ContentPanel html={data.content.childMarkdownRemark.html}/>;
    default:
      return null;
  }
};

export default Panels;
