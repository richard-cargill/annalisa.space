import React from 'react'
import Observer from 'react-intersection-observer'
require('intersection-observer')

export default class AnimateIn extends React.Component {
  render() {
    const {children, tag, className, ...props} = this.props
    const classList = className + ' animate'
    return (
      <Observer {...props} className={classList} tag={tag} ref={el => this.elem = el} onChange={inView => inView && this.elem.node.classList.add('in')}>
        {children}
      </Observer>
    );
  }
}
