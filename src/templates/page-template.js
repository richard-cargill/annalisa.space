import React from 'react'
import {navigateTo} from 'gatsby-link'
import Panels from '../components/Panels/'
import Paging from '../components/Paging'
import SelectorPanel from '../components/Panels/SelectorPanel'
import Triangles from '../components/Triangles'
import Header from '../components/header'
import Footer from '../components/Footer'

import currentPageIndexOf from '../utils/currentPageIndexOf'
import getNextIndexObj from '../utils/getNextIndexObj'
import getPrevIndexObj from '../utils/getPrevIndexObj'

const isClient = typeof window !== 'undefined'

export default class PageTemplate extends React.Component {
  componentDidMount() {
    const data = this.props.data
    const { name, slug, panels, password } = data.contentfulPage

    const authPass = (isClient) ? localStorage.getItem('p__') : false

    if (password && !authPass && isClient) navigateTo('/')
  }

  render()  {
    const data = this.props.data
    const title = data.site.siteMetadata.title
    const {transition} = this.props
    const { name, slug, panels, password } = data.contentfulPage

    const { pages } = data.contentfulPageSelectorPanel
    const currentIndex = currentPageIndexOf(pages, slug)
    const nextIndexObj = getNextIndexObj(pages, currentIndex)
    const prevIndexObj = getPrevIndexObj(pages, currentIndex)

    return (
      <React.Fragment>
      <div className="loader" style={transition && transition.style}></div>
        <div className="container">
          <Header siteTitle={title} />
        </div>
        {(slug === '/' || slug === '/about/') && <Triangles />}
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
        <Footer />
      </React.Fragment>
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
          media {
            file {
              url
            }
          }
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
      }
    }
  }
`
