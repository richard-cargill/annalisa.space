import React from 'react'
import { navigateTo } from 'gatsby-link'
import Panels from '../components/Panels/'
import Paging from '../components/Paging'
import SelectorPanel from '../components/Panels/SelectorPanel'

import currentPageIndexOf from '../utils/currentPageIndexOf'
import getNextIndexObj from '../utils/getNextIndexObj'
import getPrevIndexObj from '../utils/getPrevIndexObj'

const isClient = typeof window !== 'undefined'

export default class PageTemplate extends React.Component {
  componentDidMount() {
    const data = this.props.data
    const { name, slug, panels, password } = data.contentfulPage

    const authPass = isClient ? localStorage.getItem('p__') : false

    if (password && !authPass && isClient) navigateTo('/')
  }

  render() {
    const data = this.props.data
    const title = data.site.siteMetadata.title
    const { transition } = this.props
    const { name, slug, panels, password } = data.contentfulPage
    const { p } = this.props.pathContext

    const { pages } = data.contentfulPageSelectorPanel
    const currentIndex = currentPageIndexOf(pages, slug)
    const nextIndexObj = getNextIndexObj(pages, currentIndex)
    const prevIndexObj = getPrevIndexObj(pages, currentIndex)

    return (
      <main style={transition && transition.style}>
        <article>
          {panels &&
            panels.map((panel, i) => {
              const { __typename } = panel
              return (
                <Panels
                  key={__typename + i}
                  type={__typename}
                  data={panel}
                  p={p}
                />
              )
            })}
        </article>
        {slug.startsWith('/projects') && (
          <Paging prev={prevIndexObj} next={nextIndexObj} />
        )}
      </main>
    )
  }
}

export const pageQuery = graphql`
  query PageQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageSelectorPanel {
      pages {
        name
        title
        slug
        description
      }
    }
    contentfulPage(slug: { eq: $slug }) {
      slug
      password
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
            password
          }
        }
        ... on ContentfulHeaderPanel {
          text
        }
        ... on ContentfulImagePanel {
          fullWidth
          media {
            description
            file {
              url
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
            password
          }
        }
        ... on ContentfulSliderPanel {
          fullWidth
          slides {
            description
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
