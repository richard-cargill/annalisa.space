import React from 'react'
// import * as PIXI from 'pixi.js'
import Script from 'react-load-script'

import logo from '../images/triangle.svg'
import COLORS from '../utils/palette'

const isClient = typeof window !== 'undefined'

function randomBetween(min, max) {
  return min + (max - min) * Math.random()
}

function coinFlip(head, tails) {
  return Math.random() > 0.5 ? head : tails
}

export default class PixiLoader extends React.Component {
  state = {
    scriptLoaded: false
  }

  handleScriptCreate = () => {
    this.setState({ scriptLoaded: false })
  }

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true })
  }

  render() {
    const {children} = this.props
    return (
      <React.Fragment>
        <Script
          url="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.8.2/pixi.min.js"
          onCreate={this.handleScriptCreate}
          onLoad={this.handleScriptLoad} />

        {this.state.scriptLoaded
            ? (<Triangles>{children}</Triangles>)
            : (<React.Fragment>{children}</React.Fragment>)
        }
      </React.Fragment>
    )
  }
}

class Triangles extends React.Component {
  state = {
    width: 0,
    height: 0,
    triangles: [],
    numberOfTriangles: 75
  }

  setupTriangles = () => {
    const {numberOfTriangles} = this.state
    const {app} = this
    const triangles = []

    for(let i = 0; i < numberOfTriangles; i++) {
      const triangle = PIXI.Sprite.fromImage(logo)
      const scale = randomBetween(1, 3)
      // const scale = 1
      triangle.anchor.set(0.51)
      triangle.scale.set(0.8 + Math.random() * 0.3)
      triangle.x = Math.random() * app.screen.width
      triangle.y = Math.random() * app.screen.height
      triangle.direction = coinFlip(-1, 1)
      triangle.turningSpeed = Math.random() - 0.8
      triangle.movementSpeed = randomBetween(0.5, 1)
      triangle.rotationSpeed = randomBetween(0.5, 0.9)
      triangle.scale.x = scale
      triangle.scale.y = scale
      triangle.alpha = 0.75

      triangles.push(triangle)
      app.stage.addChild(triangle)
    }

    this.setState({triangles})

    const boundsPadding = 100
    const bounds = new PIXI.Rectangle(-boundsPadding,
                                      -boundsPadding,
                                      app.screen.width + boundsPadding * 2,
                                      app.screen.height + boundsPadding * 2)

    app.ticker.add((delta) => {
      for (let i = 0; i < triangles.length; i++) {
        const triangle = triangles[i]

        triangle.x += (triangle.direction) * triangle.movementSpeed * 1.5

        triangle.rotation += triangle.rotationSpeed * 0.025 * delta

        if(triangle.x < bounds.x) {
          triangle.x += bounds.width
        }
        else if (triangle.x > bounds.x + bounds.width) {
          triangle.x -= bounds.width
        }
      }
    })
  }

  _handleWindowResize = () => {
    const {app, stage} = this
    const width = isClient ? window.innerWidth - 15 : 0
    const height = isClient ? stage.offsetHeight : 0
    this.setState({width, height})

    app.renderer.resize(width, height)
  }

  componentWillMount() {
    this.app = new PIXI.Application({antialias: true, transparent: true})

    window.addEventListener('resize', this._handleWindowResize)
  }

  componentDidMount() {
    const {app, stage} = this
    const width = isClient ? window.innerWidth : 0
    const height = isClient ? stage.offsetHeight : 0

    stage.appendChild(app.view)
    app.renderer.resize(width, height)

    this.setupTriangles()
  }

  render() {
    const {children} = this.props

    return (
      <div className="triangles" ref={c => (this.stage = c)}>{children}</div>
    )
  }
}

