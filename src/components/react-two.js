"use strict";

import React from "react";
import _ from 'lodash';
import Two from "two.js";

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = 1000;
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

const TwoRotation = React.createClass({
  getInitialState() {
    return {
      rotationSpeed: .05,
      xOffset: 0,
      yOffset: 0,
      mouseDragAngle: 0,
      isMouseDown: false,
      isRectActive: false,
      width: SCREEN_WIDTH
    };
  },

  componentWillMount() {
    const two = new Two({
      type: Two.Types[this.props.type],
      width: this.state.width,
      height: 1000,
    });

    this.two = two;
  },

  componentDidMount() {
    this.setState({width: SCREEN_WIDTH})
    const two = this.two;
    var shapes = [];
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
      // const two = this.two;
      // const newState = this.state;
      // two.bind('resize', this.resize)
      //   .appendTo(this.stage)
      //   .trigger('resize')
      //   .update();
      //
      // this.rect = two.makeRectangle(
      //       two.width / 2,
      //       two.height / 2,
      //       100, 100
      //     );
      // this.rect.noStroke().fill = 'skyblue';
      // const offset = new Two.Vector(
      //       this.state.yOffset,
      //       this.state.xOffset
      //     );
      // two.update();
      // this.rect._renderer.elem.setAttribute('style', 'cursor: pointer');
      //
      // this.centerPoint = two.makeCircle(
      //       two.width / 2,
      //       two.width / 2,
      //       4
      //     );
      // this.centerPoint.noStroke().fill = 'hotpink';
      //
      // const originalVectors = this.rect.vertices.map((v, i) => {
      //       return {
      //               x: v.x,
      //               y: v.y
      //             };
      //     });
      //
      // two.bind('update', () => {
      //       this.rect.rotation += this.state.rotationSpeed;
      //     });
      //
      // two.play();
      //
      // this.setState({ originalVectors });
    },

  componentWillUnmount() {
      this.two.unbind('resize', this.resize);
    },

  componentWillUpdate(nextProps, nextState) {
      // const { originalVectors } = this.state;
      // let x = this.state.xOffset;
      // let y = this.state.yOffset;
      //
      // if (nextState.yOffset !== this.state.yOffset) {
      //       y = nextState.yOffset;
      //     }
      //
      // if (nextState.xOffset !== this.state.xOffset) {
      //       x = nextState.xOffset;
      //     }
      // const offset = new Two.Vector(x, y);
      //
      // this.rect.vertices.map((v, i) => {
      //       if (originalVectors) {
      //               v.set(originalVectors[i].x, originalVectors[i].y);
      //             }
      //       v.addSelf(offset);
      //     });
    },
  //
  // resetAll() {
  //     this.rect.rotation = 0;
  //
  //     this.setState({ rotationSpeed: 0 }, () => this.resetOffsets());
  //   },
  //
  // resetOffsets() {
  //     const { originalVectors } = this.state;
  //
  //     this.rect.vertices.map((v, i) => 
  //           v.set(originalVectors[i].x, originalVectors[i].y)
  //         );
  //
  //     this.setState({
  //           xOffset: 0,
  //           yOffset: 0
  //         });
  //   },

  componentDidUpdate(prevProps, prevState) {
      this.two.update();
    },

  resize() {
      this.setState({
            width: this.two.width
          });
    },
  //
  // handleOffsetChange({ target }) {
  //     this.setState({
  //           [target.name]: target.valueAsNumber,
  //         });
  //   },

  // handleSpeedChange({ target }) {
  //     this.setState({
  //           rotationSpeed: target.valueAsNumber / 100,
  //         });
  //   },

  // handleMouseDown(e) {
  //     const isRectActive = e.target.id === this.rect.id;
  //     const x = e.targetTouches ? e.targetTouches[0].clientX : e.clientX;
  //     const y = e.targetTouches ? e.targetTouches[0].clientY : e.clientY;
  //
  //     this.setState({
  //           isMouseDown: true,
  //           rotationSpeed: isRectActive ? 0 : this.state.rotationSpeed,
  //           cursorDownPos: { x, y },
  //           lastRectRotation: this.rect.rotation,
  //           isRectActive,
  //         });
  //
  //     if (this.rect.id === e.target.id) {
  //           this.rect.stroke = 'hotpink';
  //           this.rect.linewidth = 4;
  //         }
  //   },

  // handleMouseUp(e) {
  //     this.setState({
  //           isMouseDown: false,
  //           isRectActive: false,
  //         });
  //
  //     this.rect.noStroke();
  //   },

  // handleMouseMove(e) {
  //     if (this.state.isRectActive) {
  //           const { cursorDownPos, lastRectRotation } = this.state;
  //           e.preventDefault();
  //     
  //           const x = e.targetTouches ? e.targetTouches[0].clientX : e.clientX;
  //           const y = e.targetTouches ? e.targetTouches[0].clientY : e.clientY;
  //     
  //           const svgBounds = this.two.renderer.domElement.getBoundingClientRect();
  //     
  //           const angleAtCursorDown = Math.atan2(
  //                   cursorDownPos.y - svgBounds.top - this.centerPoint.translation.y,
  //                   cursorDownPos.x - svgBounds.left - this.centerPoint.translation.x
  //                 );
  //     
  //           const angleAtCursorNow = Math.atan2(
  //                   y - svgBounds.top - this.centerPoint.translation.y,
  //                   x - svgBounds.left - this.centerPoint.translation.x
  //                 );
  //     
  //           this.rect.rotation = lastRectRotation + angleAtCursorNow - angleAtCursorDown;
  //         }
  //   },

  // handleClick(e) {},

  render() {
      return (
            <div>
              <div
                ref={c => this.stage = c}
                style={{height: 100 + '%'}}
              />
            </div>
          );
    },
});

export default TwoRotation;

// ReactDOM.render(
//   <TwoRotation
//     type="svg" 
//   />,
//   document.querySelector('.js-mount')
// );
