import React, { Component } from 'react'
import Link from 'gatsby-link'

import truncateTextAt from '../../utils/truncateTextAt.js'

export default class PageSelectorPanel extends Component {
  handleClick = () => {
    const hiddenElems = this.elems.querySelectorAll('.is-hidden')
    if (hiddenElems) {
      hiddenElems.forEach(elem => elem.classList.remove('is-hidden'))
    }
  }

  render() {
    const { text, pages, pagesToDisplay } = this.props
    const showLoadMoreButton = pagesToDisplay < pages.length

    return (
      <section
        ref={el => (this.elems = el)}
        className="panel pageSelector container"
      >
        <div className="pageSelector__items">
          {pages.map((page, i) => {
            const { name, slug, description, tags } = page

            const isHidden = i >= pagesToDisplay ? 'is-hidden' : ''

            return (
              <article className={`pageSelector__item ${isHidden}`} key={name}>
                <Link className="pageSelector__a" to={slug}>
                  <h3 className="pageSelector__title">{name}</h3>
                  {description && (
                    <p className="pageSelector__content">
                      {truncateTextAt(description, 100)}
                    </p>
                  )}
                  {tags && <p className="pageSelector__tags">{tags}</p>}
                </Link>
              </article>
            )
          })}
          {showLoadMoreButton && (
            <div style={{ width: '100%' }}>
              <button onClick={this.handleClick} className="button float-right">
                Load more
              </button>
            </div>
          )}
        </div>
      </section>
    )
  }
}
