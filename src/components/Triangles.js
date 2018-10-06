import React from 'react'
import _ from 'lodash'
import Script from 'react-load-script'

const isClient = typeof window !== 'undefined'
const SCREEN_WIDTH = isClient ? window.innerWidth : 1000
const SCREEN_HEIGHT = 2000
const MIN_RADIUS = 7
const MAX_RADIUS = 30
const MIN_SPEED = 0.7
const MAX_SPEED = 1.5
const N = 75
const COLORS = [
  '#d33682',
  '#268bd2',
  '#a3d783',
  '#2aa198',
  '#b58900',
  '#859900',
  '#dc322f',
]

function randomBetween(min, max) {
  return min + (max - min) * Math.random()
}

function coinFlip(head, tails) {
  return Math.random() > 0.5 ? head : tails
}

function makeRandomPath(two) {
  const x = randomBetween(0, SCREEN_WIDTH)
  const y = randomBetween(0, SCREEN_HEIGHT)
  const radius = randomBetween(MIN_RADIUS, MAX_RADIUS)
  const color = _.sample(COLORS)
  const opacity = randomBetween(0.1, 0.5)

  const path = two.makePolygon(x, y, radius, 3)
  path.noFill()
  path.stroke = color
  path.linewidth = 0.75
  path.opacity = opacity

  return path
}

function moveShape(shape) {
  rotateShape(shape)
  translateShape(shape)
}

function rotateShape(shape) {
  shape.path.rotation += shape.speed * 0.01
}

function translateShape(shape) {
  const translation = new Two.Vector(shape.direction * shape.speed, 0)
  shape.path.translation.addSelf(translation)

  if (shape.path.translation.x > SCREEN_WIDTH + MAX_RADIUS) {
    shape.path.translation.set(-MAX_RADIUS, shape.path.translation.y)
  }

  if (shape.path.translation.x < -MAX_RADIUS) {
    shape.path.translation.set(
      SCREEN_WIDTH + MAX_RADIUS,
      shape.path.translation.y
    )
  }
}

function getWindowWidth () {
  const isClient = typeof window !== 'undefined'
  return isClient ? window.innerWidth : 1000
}

function getElemHeight (el) {
  const isClient = typeof document !== 'undefined'
  const queryEl = document.querySelector(el)

  return isClient && queryEl !== null
    ? queryEl.offsetHeight : 1000
}

class Triangles extends React.Component {
  state = {
    width: 0,
    height: 0
  }

  _handleWindowResize = () => {
    const width = getWindowWidth()
    const height = getElemHeight('#get-height')

    this.setState({width, height})

    this.two.renderer.setSize(width, height)
  }

  componentWillMount = () => {
    const stage = this.stage

    const width = getWindowWidth()
    const height = getElemHeight('#get-height')

    const two = new Two({
      width,
      height
    })

    this.setState({width, height})

    this.two = two

    window.addEventListener('resize', this._handleWindowResize);
  }

  componentDidMount = () => {
    const two = this.two
    const shapes = []
    const stage = this.stage

    for (let i = 0; i < N; i++) {
      shapes.push({
        path: makeRandomPath(two),
        direction: coinFlip(1, -1),
        speed: randomBetween(MIN_SPEED, MAX_SPEED),
      })
    }

    two
      .appendTo(this.stage)
      .bind('update', function(frameCount) {
        _.each(shapes, function(shape, i) {
          moveShape(shape)
        })
      })
      .play()
  }

  componentWillUnmount = () => {
    this.two.unbind('update')
    window.addEventListener('resize', this._handleWindowResize);
  }

  render() {
    return (
      <React.Fragment>
        <div
          ref={c => (this.stage = c)}
          style={{
            top: '-100px',
            height: 'calc(100% + 100px)',
            position: 'absolute',
            zIndex: '-1',
          }}
        />
      </React.Fragment>
    )
  }
}

class TriangleLoader extends React.Component {
  state = { scriptLoaded: false }

  handleScriptCreate = () => {
    this.setState({ scriptLoaded: false })
  }

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true })
  }

  render() {
    return (
      <React.Fragment>
        <Script
          url="https://cdnjs.cloudflare.com/ajax/libs/two.js/0.7.0-alpha.1/two.min.js"
          onCreate={this.handleScriptCreate}
          onLoad={this.handleScriptLoad}
        />

        {this.state.scriptLoaded && <Triangles />}
      </React.Fragment>
    )
  }
}

export default TriangleLoader
