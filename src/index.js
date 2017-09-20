import React, {Component} from 'react';
import PropTypes from 'prop-types';
//styles
import {keyFramesStyle} from './styles/Animation';
import {SpinnerBg} from './styles/Spinner';
import Shapes from './styles/Shapes';
import './styles/style.css';
//shapes
import TriangleUp from './shapes/TriangleUp';
import Loader from './shapes/Loader';
import Cog from './shapes/Cog';
import Rocket from './shapes/Rocket'
//other
import injectStyle from './helpers/injectStyle';

class Spinner extends Component {
  render() {
    const {
      shape,
      animation,
      time,
      duration,
      opacity,
      bgColor,
      elColor
    } = this.props;
    const ShapeLookUp = {
      triangleUp: TriangleUp,
      loader: Loader,
      cog: Cog,
      rocket: Rocket
    };
    const ShapeComponent = ShapeLookUp[shape];
    keyFramesStyle(shape, elColor)
      .styles
      .map(animation => injectStyle(animation));
    return (
      <div>
        <div style={{
          ...SpinnerBg(opacity, bgColor)
        }}></div>
        {ShapeComponent && <ShapeComponent
          shape={shape}
          animation={animation}
          time={time}
          duration={duration}
          elColor={elColor}/>}
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
  elColor: PropTypes.string,
  time: function (props, propName, componentName) {
    let value = props[propName],
      numberFromValue = parseInt(value);
    if (numberFromValue <= 0 || numberFromValue > 10) {
      return new Error('You can only use values between 1 and 10');
    }
  }
};
Spinner.defaultProps = {
  animation: 'spin',
  time: '2s',
  opacity: '0.5',
  duration: 'infinite',
  bgColor: '#27556c',
  elColor: '#2d1557'
};
export default Spinner;
