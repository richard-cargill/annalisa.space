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
          About me
        </Link>
      </li>
      <li className="nav__list__item">
        <a
          className="nav__list__a"
          title="External link to Medium"
          role="menuitem"
          href="https://blog.prototypr.io/@d_art_h_vader"
          target="_blank"
        >
          Blog
        </a>
      </li>
    </ul>
  </nav>
)

export default Navigation
