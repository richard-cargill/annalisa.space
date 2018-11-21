import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import logo from '../images/annalisa-valente-logo.svg'
import Header from '../components/header'
import Footer from '../components/Footer'
import Triangles from '../components/Triangles'

const isClient = typeof window !== 'undefined'

import './index.css'

function normaliseSlug(slug, sep = '-') {
  return slug.slice(1).replace(/\//gi, sep)
}

function normaliseString(string) {
  return string && string.replace(/-/gi, ' ')
}

function pageNameFromPathname(pathname) {
  if (pathname !== '/') {
    return normaliseSlug(pathname) + 'page'
  } else {
    return 'home-page'
  }
}

function capitaliseString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function lastPart(pathname) {
  const pathnameParts = pathname.split('/').filter(x => x)
  return pathnameParts[pathnameParts.length - 1]
}

const Layout = ({ children, data, location }) => {
  const { title, desc } = data.site.siteMetadata
  const pageName = normaliseString(lastPart(location.pathname))
  var pageTitle = `${title} | ${desc}`

  if (pageName) pageTitle = `${capitaliseString(pageName)} | ${desc} | ${title}`

  return (
    <React.Fragment>
      <Helmet
        title={pageTitle}
        meta={[
          {
            name: 'description',
            content: "Annalisa Valente's portfolio website",
          },
          {
            name: 'keywords',
            content: 'Annalisa Valente, UX/UI, Product Designer',
          },
        ]}
      />
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
        className={pageNameFromPathname(location.pathname)}
      >
        <div className="container">
          <Header siteTitle={title} />
        </div>

        <Triangles />
        {children()}

        <Footer />
      </div>
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
        desc
      }
    }
  }
`
