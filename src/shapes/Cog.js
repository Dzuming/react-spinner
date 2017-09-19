import React from 'react';
import Shapes from '../styles/Shapes';
import Position from '../styles/Position';
import {Animation} from '../styles/Animation';
const Cog = ({shape, animation, time, duration}) => {
    return (
        <div>
            <span
                aria-hidden="true"
                className="icon-cog"
                style={{
                ...Shapes[shape],
                ...Position.center,
                ...Animation(animation, time, duration)
            }}></span>
        </div>
    );
}

export default Cog;