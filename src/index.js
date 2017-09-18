import React, {Component} from 'react';
import {Animation, keyFramesStyle} from './styles/Animation';
import SpinnerStyle from './styles/Spinner';
import Position from './styles/Position';
import Shapes from './styles/Shapes'
import injectStyle from './helpers/injectStyle';
import PropTypes from 'prop-types';

class Spinner extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    keyFramesStyle(props.shape).styles.map(animation => injectStyle(animation));
  }

  render() {
    const {shape, animation, time, duration} = this.props
    return (
      <div>
        <div style={{
          ...SpinnerStyle.background
        }}></div>
        <div
          style={{
          ...Shapes[shape],
          ...Position.center,
          ...Animation(animation, time, duration)
        }}></div>
      </div>
    );
  }
}
Spinner.propTypes = {
  animation: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  duration: PropTypes.string,
  shape: PropTypes.string.isRequired
};
export default Spinner;
