import React from 'react'
import Link from 'gatsby-link'
import Navigation from './Navigation'
import logo from '../images/annalisa-valente-logo.svg'

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="logo">
      <Link className="logo__a" to="/">
        <img className="logo__img" src={logo} alt={siteTitle} />
      </Link>
    </h1>
    <Navigation />
  </header>
)

export default Header
