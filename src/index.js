import React, {Component} from 'react';
import PropTypes from 'prop-types';
//styles
import {keyFramesStyle} from './styles/Animation';
import SpinnerStyle from './styles/Spinner';
import Shapes from './styles/Shapes'
//shapes
import TriangleUp from './shapes/TriangleUp'
//other
import injectStyle from './helpers/injectStyle';

class Spinner extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    keyFramesStyle(props.shape)
      .styles
      .map(animation => injectStyle(animation));
  }

  render() {
    const ShapeLookUp = {
      triangleUp: TriangleUp
    };
    const {shape, animation, time, duration} = this.props;
    const ShapeComponent = ShapeLookUp[shape];
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
