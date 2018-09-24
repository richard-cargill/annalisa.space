import React from "react";
import _ from 'lodash';
import Two from "two.js";

const isClient = typeof window !== 'undefined'
var SCREEN_WIDTH = isClient ? window.innerWidth : 1000;
var SCREEN_HEIGHT = 2000;
var MIN_RADIUS = 10;
var MAX_RADIUS = 40;
var MIN_SPEED = 0.2;
var MAX_SPEED = 1;
var N = 75;
var COLORS = [
  '#d33682',
  '#268bd2',
  '#a3d783',
  '#2aa198',
  '#b58900',
  '#859900',
  '#dc322f',
];

function randomBetween(min, max) {
  return min + (max - min) * Math.random();
}

function coinFlip(head, tails) {
  return (Math.random() > 0.5) ? head : tails;
}

function makeRandomPath(two) {
  var x = randomBetween(0, SCREEN_WIDTH);
  var y = randomBetween(0, SCREEN_HEIGHT);
  var radius = randomBetween(MIN_RADIUS, MAX_RADIUS);
  var color = _.sample(COLORS);
  var opacity = randomBetween(0.6, 1);

  var path = two.makePolygon(x, y, radius, 3);
  path.noFill();
  path.stroke = color;
  path.linewidth = 0.75;
  path.opacity = opacity;

  return path;
}

function moveShape(shape) {
  rotateShape(shape);
  translateShape(shape);
}

function rotateShape(shape) {
  shape.path.rotation += shape.speed * 0.01;
}

function translateShape(shape) {

  var translation = new Two.Vector(shape.direction * shape.speed, 0);
  shape.path.translation.addSelf(translation);

  if (shape.path.translation.x > SCREEN_WIDTH + MAX_RADIUS) {
    shape.path.translation.set(-MAX_RADIUS, shape.path.translation.y);
  }

  if (shape.path.translation.x < -MAX_RADIUS) {
    shape.path.translation.set(SCREEN_WIDTH + MAX_RADIUS, shape.path.translation.y);
  }
}

class TwoRotation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: SCREEN_WIDTH };
  }

  componentWillMount() {
    const stage = this.stage;
    const two = new Two({
      type: Two.Types[this.props.type],
      width: this.state.width,
      height: 2000,
    });

    this.two = two;
  }

  componentDidMount() {
    this.setState({width: SCREEN_WIDTH})
    const two = this.two;
    var shapes = [];
    const stage = this.stage;

    for (var i = 0; i < N; i++) {
      shapes.push({
        path: makeRandomPath(two),
        direction: coinFlip(1, -1),
        speed: randomBetween(MIN_SPEED, MAX_SPEED),
      });
    }

    two.appendTo(this.stage);

    two.bind('update', function(frameCount) {
      _.each(shapes, function(shape, i) {
        moveShape(shape);
      });
    }).play();
    }

  componentWillUnmount() {
    this.two.unbind('resize', this.resize);
  }

  render() {
    return (
      <div>
        <div
          ref={c => this.stage = c}
          style={{
            height: 100 + '%',
            position: 'absolute',
            zIndex: '-1'
          }}
        />
      </div>
    );
  }
}

export default TwoRotation;
