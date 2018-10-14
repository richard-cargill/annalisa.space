import React, { Component } from 'react'
import Link, {navigateTo} from 'gatsby-link'
import AnimateIn from '../AnimateIn.js'

import truncateTextAt from '../../utils/truncateTextAt.js'
const isClient = typeof window !== 'undefined'

export default class PageSelectorPanel extends Component {
  state = {
    showLogin: false,
    password: false,
    input: '',
    href: '',
    incorrectPassword: false
  }

  handleClick = () => {
    const hiddenElems = this.elems.querySelectorAll('.is-hidden')
    if (hiddenElems) {
      hiddenElems.forEach(elem => elem.classList.remove('is-hidden'))
    }
  }

  onClick = (e, password, href) => {
    const authPass = (isClient) ? localStorage.getItem('p__') : false
    if (password && !authPass) {
      e.preventDefault()
      this.setState({showLogin: true, password, href: href})
    } else {
      this.setState({showLogin: false, password: false, href: ''})
    }
  }

  onChange = (e) => {
    const password = this.state.password
    const value = e.target.value
    this.setState({input: value})
  }

  onKeyPress = (e) => {
    const {password, href} = this.state
    const value = e.target.value

    if(e.key === 'Enter') {
      const truthey = !!(value === password)
      if(truthey) {
        navigateTo(href)
        this.setState({incorrectPassword: false})
        if(isClient) localStorage.setItem('p__', true);
      } else {
        this.setState({incorrectPassword: true})
      }
    }
  }

  close = (e) => {
    this.setState({showLogin: false, password: false, href: ''})
  }

  stopProp = (e) => {
    e.stopPropagation()
  }

  render() {
    const { text, pages, pagesToDisplay } = this.props
    const showLoadMoreButton = pagesToDisplay < pages.length
    const {showLogin, input, incorrectPassword} = this.state

    return (
      <section
        ref={el => (this.elems = el)}
        className="panel pageSelector container"
      >
        <div className="pageSelector__items">
          {pages.map((page, i) => {
            const { title, name, slug, description, tags, password } = page

            const isHidden = i >= pagesToDisplay ? 'is-hidden' : ''
            const selectorClassName = `pageSelector__item ${isHidden}`
            const pageTitle = title ? title : name

            return (
              <AnimateIn tag="article" className={selectorClassName} key={name}>
                <Link onClick={e => this.onClick(e, password, slug)} className="pageSelector__a" to={slug}>
                  <div className="pageSelector__center">
                    <h3 className="pageSelector__title">{pageTitle}</h3>
                    {description && (
                      <p className="pageSelector__content">
                        {truncateTextAt(description, 70)}
                      </p>
                    )}
                    {tags && <p className="pageSelector__tags">{tags}</p>}
                  </div>
                </Link>
              </AnimateIn>
            )
          })}
          {showLoadMoreButton && (
            <div style={{ width: '100%'}}>
              <button onClick={this.handleClick} className="button float-right">
                Load more
                <span className="icon">&darr;</span>
              </button>
            </div>
          )}
          {showLogin && (<div onClick={this.close} className="passwordPanel">
            <input style={{border: incorrectPassword ? '1px solid red' : 0 }} onKeyPress={this.onKeyPress} onClick={this.stopProp} onChange={this.onChange} className="password" type="password" value={input} placeholder="Enter password" />
            </div>)}
        </div>
      </section>
    )
  }
}
