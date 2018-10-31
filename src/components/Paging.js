import React from 'react'
import Link from 'gatsby-link'

import truncateTextAt from '../utils/truncateTextAt.js'

const Paging = ({ prev, next }) => {
  const prevTitle = prev.title ? prev.title : prev.name
  const nextTitle = next.title ? next.title : next.name

  return (
    <aside className="background-alt">
      <nav className="paging container" aria-label="Paging">
        <Link className="paging__item" role="menuitem" to={prev.slug}>
          <small className="prev-arrow">Previous</small>
          <h4 className="pageSelector__title">{prevTitle}</h4>
          <p className="paging__description">
            {truncateTextAt(prev.description, 100)}
          </p>
        </Link>
        <Link className="paging__item" role="menuitem" to={next.slug}>
          <small className="next-arrow">Next</small>
          <h4 className="pageSelector__title">{nextTitle}</h4>
          <p className="paging__description">
            {truncateTextAt(next.description, 100)}
          </p>
        </Link>
      </nav>
    </aside>
  )
}

export default Paging
