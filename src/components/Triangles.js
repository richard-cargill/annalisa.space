import React from 'react'
import _ from 'lodash'
import Script from 'react-load-script'
import COLORS from '../utils/palette'

const isClient = typeof window !== 'undefined'
const SCREEN_WIDTH = isClient ? window.innerWidth : 1000
const SCREEN_HEIGHT = 2000
const MIN_RADIUS = 10
const MAX_RADIUS = 40
const MIN_SPEED = 0.7
const MAX_SPEED = 1.5
const N = 75

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

class TwoRotation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { width: SCREEN_WIDTH }
  }

  componentWillMount() {
    const stage = this.stage
    const two = new Two({
      width: this.state.width,
      height: 2000,
    })

    this.two = two
  }

  componentDidMount() {
    this.setState({ width: SCREEN_WIDTH })
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

    two.appendTo(this.stage)

    two
      .bind('update', function(frameCount) {
        _.each(shapes, function(shape, i) {
          moveShape(shape)
        })
      })
      .play()
  }

  componentWillUnmount() {
    this.two.unbind('update')
  }

  render() {
    return (
      <React.Fragment>
        <div
          ref={c => (this.stage = c)}
          style={{
            top: '-100px',
            height: 100 + '%',
            position: 'absolute',
            zIndex: '-1',
            backgroundColor: '#fbfbfb',
          }}
        />
      </React.Fragment>
    )
  }
}

class TwoWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { scriptLoaded: false }
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

  render() {
    return (
      <React.Fragment>
        <Script
          url="https://cdnjs.cloudflare.com/ajax/libs/two.js/0.7.0-alpha.1/two.min.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />

        {this.state.scriptLoaded && <TwoRotation />}
      </React.Fragment>
    )
  }
}

export default TwoWrapper
