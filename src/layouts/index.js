import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/Footer'
import Triangles from '../components/Triangles'

const isClient = typeof window !== 'undefined'

import './index.css'

function normaliseSlug (slug) {
  return slug.slice(1).replace(/\//gi, '-')
}

function pageNameFromPathname (pathname) {
  pathname = pathname.replace('/annalisa.space/', '/')
  if (pathname !== '/') {
    return normaliseSlug(pathname) + 'page'
  } else {
    return 'home-page'
  }
}

const Layout = ({ children, data, location }) => {
  const title = data.site.siteMetadata.title

  return (
    <React.Fragment>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
        className={pageNameFromPathname(location.pathname)}
      >
        <Triangles>
          <div className="container">
            <Header siteTitle={title} />
          </div>
          {children()}
        </Triangles>
      </div>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
