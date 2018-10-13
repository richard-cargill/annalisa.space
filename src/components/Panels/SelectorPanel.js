import React from 'react'
import Link from 'gatsby-link'
import AnimateIn from '../AnimateIn.js'
import truncateTextAt from '../../utils/truncateTextAt.js'

const SelectorPanel = ({ text, pages }) => {
  return (
    <div className="background-alt">
      <section className="container panel selectorPanel">
        <h4 className="selectorPanel__header">{text}</h4>

        <div className="selectorPanel__items">
          {pages &&
            pages.map((page, i) => {
              const { name, description, slug } = page

              return (
                <AnimateIn tag="div" key={i} className="selectorPanel__item">
                  <div>
                    <h4 className="pageSelector__title">{name}</h4>
                    <p className="pageSelector__content">
                      {truncateTextAt(description, 100)}
                    </p>
                    <Link to={slug} className="button">
                      Learn more
                    </Link>
                  </div>
                </AnimateIn>
              )
            })}
        </div>
      </section>
    </div>
  )
}

export default SelectorPanel
