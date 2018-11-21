import React from 'react'

export default class AnimateIn extends React.Component {
  render() {
    const { children, tag, className, ...props } = this.props
    const classList = className + ' animate in'
    return (
      <article {...props} className={classList} tag={tag}>
        {children}
      </article>
    )
  }
}
