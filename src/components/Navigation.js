import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
  <nav className="nav" aria-label="Site Navigation">
    <ul className="nav__list" aria-label="Site Navigation">
      <li className="nav__list__item">
        <Link
          exact
          activeClassName="is-active"
          className="nav__list__a"
          role="menuitem"
          to="/"
        >
          Projects
        </Link>
      </li>
      <li className="nav__list__item">
        <Link
          activeClassName="is-active"
          className="nav__list__a"
          role="menuitem"
          to="/about/"
        >
          About
        </Link>
      </li>
      <li className="nav__list__item">
        <Link
          activeClassName="is-active"
          className="nav__list__a"
          role="menuitem"
          to="/blog/"
        >
          Blog
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
