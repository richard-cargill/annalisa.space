import React from 'react'
import Panels from '../components/Panels/'
import Paging from '../components/Paging'
import SelectorPanel from '../components/Panels/SelectorPanel'
import Triangles from '../components/Triangles'

import currentPageIndexOf from '../utils/currentPageIndexOf'
import getNextIndexObj from '../utils/getNextIndexObj'
import getPrevIndexObj from '../utils/getPrevIndexObj'

const PageTemplate = ({ data }) => {
  const { name, slug, panels } = data.contentfulPage

  const { pages } = data.contentfulPageSelectorPanel
  const currentIndex = currentPageIndexOf(pages, slug)
  const nextIndexObj = getNextIndexObj(pages, currentIndex)
  const prevIndexObj = getPrevIndexObj(pages, currentIndex)

  return (
    <React.Fragment>
      {slug === '/' && <Triangles />}
      <main>
        <article>
          {panels &&
            panels.map(panel => {
              const { __typename } = panel
              return (
                <Panels key={__typename} type={__typename} data={panel} />
              )
            })}
        </article>
        {slug.startsWith('/projects') && (
          <Paging prev={prevIndexObj} next={nextIndexObj} />
        )}
      </main>
    </React.Fragment>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageQuery($slug: String!) {
    contentfulPageSelectorPanel {
      pages {
        slug
        description
      }
    }
    contentfulPage(slug: { eq: $slug }) {
      slug
      panels {
        __typename
        ... on ContentfulHeroPanel {
          text
          description
        }
        ... on ContentfulPageSelectorPanel {
          text
          pagesToDisplay
          pages {
            title
            name
            slug
            description
            tags
          }
        }
        ... on ContentfulHeaderPanel {
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
          media {
            file {
              url
              fileName
              contentType
            }
          }
        }
        ... on ContentfulContentPanel {
          content {
            content
            childMarkdownRemark {
              html
            }
          }
        }
        ... on ContentfulSelectorPanel {
          text
          pages {
            title
            name
            slug
            description
          }
        }
      }
    }
  }
`
