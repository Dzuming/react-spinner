import React from 'react';
import Shapes from '../styles/Shapes';
import Position from '../styles/Position';
import {Animation} from '../styles/Animation';
const TriangleUp = ({shape, animation, time, duration}) => {
    return (
        <div>
        <div
            style={{
            ...Shapes[shape],
            ...Position.center,
            ...Animation(animation, time, duration)
        }}></div>
        </div>
    );
}

export default TriangleUp;