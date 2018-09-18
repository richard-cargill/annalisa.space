import React from 'react';
import Panels from '../components/Panels/';

export default class PageTemplate extends React.Component {
  render() {
    const {
      name,
      panels
    } = this.props.data.contentfulPage;

    return (
      <article>
        {panels && panels.map(panel => {
          const { __typename } = panel;
          return <Panels key={__typename} type={__typename} data={panel} />
        })}
      </article>
    )
  }
};

export const pageQuery = graphql`
	query PageQuery($slug: String!) {
		contentfulPage(slug: {eq : $slug}) {
      name
      slug
			panels {
        __typename
        ... on ContentfulHeroPanel {
          text
        }
        ... on ContentfulPageSelectorPanel {
          text
          pages {
          name
          slug
          }
        }
        ... on ContentfulHeaderPanel {
          name
          text
          media {
            file {
              url
              fileName
              contentType
            }
          }
        }
        ... on ContentfulImagePanel {
          name
          media {
            file {
              url
              fileName
              contentType
            }
          }
        }
        ... on ContentfulContentPanel {
          name
          content {
            content
            childMarkdownRemark {
              html
            }
          }
        }
		  }
	  }
	}
`;
