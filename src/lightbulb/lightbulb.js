import React from 'react';
import bulb from '../images/bulb.png';
import './lightbulbstyles.css';
import rope from '../images/rope.png';
import light from '../images/light.png'

export default function LightbBulb() {
    return (
        <div className="bulbWrapper">
            <img id="rope" src={rope} />
            <img id="bulb" src={bulb} />
            <img id="light" src={light} />
        </div>
    )
}
