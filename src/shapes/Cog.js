import React from 'react';
import Shapes from '../styles/Shapes';
import Position from '../styles/Position';
import {SpinnerItemSvg} from '../styles/Spinner';
import {Animation} from '../styles/Animation';
const Cog = ({shape, animation, time, duration, elColor}) => {
    return (
        <div>
            <span
                aria-hidden="true"
                className="icon-cog"
                style={{
                ...Shapes[shape],
                ...Position.center,
                ...SpinnerItemSvg(elColor),
                ...Animation(animation, time, duration)
            }}></span>
        </div>
    );
}

export default Cog;