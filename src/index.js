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
    const ShapeLookUp = {
      triangleUp: TriangleUp,
      loader: Loader,
      cog: Cog
    };
    const {shape, animation, time, duration} = this.props;
    const ShapeComponent = ShapeLookUp[shape];
    keyFramesStyle(shape)
    .styles
    .map(animation => injectStyle(animation));
    return (
      <div>
        <div style={{
          ...SpinnerStyle.background
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
  time: PropTypes.string,
  duration: PropTypes.string,
  shape: PropTypes.string.isRequired
};
Spinner.defaultProps = {
  animation: 'pulse',
  time: '2s',
  duration: 'infinite'
};
export default Spinner;
