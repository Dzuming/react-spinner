import React, {Component} from 'react';
import PropTypes from 'prop-types';
//styles
import {keyFramesStyle} from './styles/Animation';
import SpinnerStyle from './styles/Spinner';
import Shapes from './styles/Shapes'
import './styles/style.css'
//shapes
import TriangleUp from './shapes/TriangleUp'
import Loader from './shapes/Loader'
import Cog from './shapes/Cog'
//other
import injectStyle from './helpers/injectStyle';

class Spinner extends Component {
  render() {
    const {shape, animation, time, duration, opacity, bgColor} = this.props;
    const ShapeLookUp = {
      triangleUp: TriangleUp,
      loader: Loader,
      cog: Cog
    };
    const ShapeComponent = ShapeLookUp[shape];
    keyFramesStyle(shape)
      .styles
      .map(animation => injectStyle(animation));
    return (
      <div>
        <div style={{
          ...SpinnerStyle(opacity, bgColor).background
        }}></div>
        {ShapeComponent && <ShapeComponent
          shape={shape}
          animation={animation}
          time={time}
          duration={duration}/>}

      </div>
    );
  }
}
Spinner.propTypes = {
  animation: PropTypes.string,
  duration: PropTypes.string,
  shape: PropTypes.string.isRequired,
  opacity: PropTypes.string,
  bgColor: PropTypes.string,
  time: function (props, propName, componentName) {
    let value = props[propName],
      numberFromValue = parseInt(value);
    if (numberFromValue <= 0 || numberFromValue > 10) {
      return new Error('You can only use values between 1 and 10');
    }
  }
};
Spinner.defaultProps = {
  animation: 'pulse',
  time: '2s',
  opacity: '0.5',
  duration: 'infinite'
};
export default Spinner;
