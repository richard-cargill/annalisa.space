import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'
import AnimateIn from '../AnimateIn.js'
import sha1 from 'sha1'

import truncateTextAt from '../../utils/truncateTextAt.js'
const isClient = typeof window !== 'undefined'

export default class PageSelectorPanel extends Component {
  state = {
    showLogin: false,
    password: false,
    input: '',
    href: '',
    incorrectPassword: false,
  }

  handleClick = e => {
    const hiddenElems = this.elems.querySelectorAll('.is-hidden')
    if (hiddenElems) {
      hiddenElems.forEach(elem => elem.classList.remove('is-hidden'))
    }
    e.target.classList.add('is-hidden')
  }

  onClick = (e, password, href) => {
    const authPass = isClient ? localStorage.getItem('p__') : false
    if (password && !authPass) {
      e.preventDefault()
      this.setState({ showLogin: true, password, href: href })
    } else {
      this.setState({ showLogin: false, password: false, href: '' })
    }
  }

  onChange = e => {
    const value = e.target.value
    this.setState({ input: value })
  }

  passwordTest = value => {
    const { password, href } = this.state
    const hashValue = sha1(value)

    const truthey = !!(hashValue === password)
    if (truthey) {
      navigateTo(href)
      this.setState({ incorrectPassword: false })
      if (isClient) localStorage.setItem('p__', true)
    } else {
      this.setState({ incorrectPassword: true })
    }
  }

  onFocusOut = e => {
    const value = e.target.value
    this.passwordTest(value)
  }

  onKeyPress = e => {
    const value = e.target.value
    if (e.key === 'Enter') {
      this.passwordTest(value)
    }
  }

  close = e => {
    this.setState({ showLogin: false, password: false, href: '' })
  }

  stopProp = e => {
    e.stopPropagation()
  }

  render() {
    const { text, pages, pagesToDisplay, p } = this.props
    const showLoadMoreButton = pagesToDisplay < pages.length
    const { showLogin, input, incorrectPassword } = this.state

    return (
      <section
        ref={el => (this.elems = el)}
        className="panel pageSelector container limit-width"
      >
        <div className="pageSelector__items">
          {pages.map((page, i) => {
            const { title, name, slug, description, tags, password } = page

            const isHidden = i >= pagesToDisplay ? 'is-hidden' : ''
            const selectorClassName = `pageSelector__item ${isHidden}`
            const pageTitle = title ? title : name

            return (
              <AnimateIn tag="article" className={selectorClassName} key={name}>
                <Link
                  onClick={e => this.onClick(e, p, slug)}
                  className="pageSelector__a"
                  to={slug}
                >
                  <div className="pageSelector__center">
                    <h3 className="pageSelector__title">{pageTitle}</h3>
                    {description && (
                      <p className="pageSelector__content">
                        {truncateTextAt(description, 75)}
                      </p>
                    )}
                    {tags && <p className="pageSelector__tags">{tags}</p>}
                  </div>
                </Link>
              </AnimateIn>
            )
          })}
          {showLoadMoreButton && (
            <div style={{ width: '100%' }}>
              <button
                onClick={this.handleClick}
                className="button float-right button--with-icon"
              >
                Load more
              </button>
            </div>
          )}
          {showLogin && (
            <div className="passwordPanel">
              <button
                type="button"
                onClick={this.close}
                className="password__close"
              >
                &times;
              </button>
              <input
                style={{ border: incorrectPassword ? '1px solid red' : 0 }}
                onKeyPress={this.onKeyPress}
                onBlur={this.onFocusOut}
                onClick={this.stopProp}
                onChange={this.onChange}
                className="password"
                type="password"
                value={input}
                placeholder="Enter password"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}
