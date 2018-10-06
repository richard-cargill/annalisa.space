import React from 'react'
import _ from 'lodash'
import Script from 'react-load-script'

const isClient = typeof window !== 'undefined'
const SCREEN_WIDTH = isClient ? window.innerWidth : 1000
const SCREEN_HEIGHT = 2000
const MIN_RADIUS = 10
const MAX_RADIUS = 40
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

  const svgNode = document.querySelector('svg')
  console.log(svgNode)

  // const path = two.makePolygon(x, y, radius, 3)
  const path = two.interpret(svgNode)
  path.translation.set(x, y, radius, 3)

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

<svg width="62px" height="31px" viewBox="0 0 62 31" version="1.1">
    <title>Group 25</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Blue-Customer-Service-Page" transform="translate(-62.000000, -36.000000)">
            <g id="Group-25" transform="translate(59.000000, 33.000000)">
                <path d="M4.45564941,31.5132201 C2.25400068,31.2049462 1.5719139,29.4918218 2.94298328,27.7140184 L8.99335362,19.8534526 C10.3583648,18.0781329 12.6112919,15.1640794 13.9750995,13.3916369 L20.0226345,5.52984986 C21.3953357,3.75614478 23.1971854,4.00426295 24.0310283,6.09853703 L34.4214292,32.1949954 C35.2577198,34.2954171 34.1338774,35.7501773 31.9289651,35.4337067 L22.1984878,34.0454416 C20.0041008,33.7318069 16.388632,33.22371 14.188962,32.9027064 L4.45564941,31.5132201 Z" id="Fill-5" stroke="#4A90E2" transform="translate(18.466631, 19.912255) rotate(-8.000000) translate(-18.466631, -19.912255) "></path>
                <path d="M35.1898043,28.9814941 C33.022155,28.6779809 32.3506015,26.9913118 33.7004978,25.2409624 L39.657434,17.5017851 C41.0013657,15.7538812 43.2195015,12.8848286 44.5622482,11.1397573 L50.5163929,3.39937767 C51.8678958,1.6530634 53.6419201,1.89734996 54.4628862,3.95928276 L64.6928311,29.652741 C65.5162071,31.7207264 64.4097199,33.1530212 62.2388574,32.8414378 L52.6586451,31.4746113 C50.4981454,31.1658199 46.9385092,30.6655694 44.7728081,30.349523 L35.1898043,28.9814941 Z" id="Fill-5" stroke="#9013FE" transform="translate(48.984418, 17.559680) rotate(172.000000) translate(-48.984418, -17.559680) "></path>
            </g>
        </g>
    </g>
</svg>
      </React.Fragment>
    )
  }
}

export default TwoWrapper
