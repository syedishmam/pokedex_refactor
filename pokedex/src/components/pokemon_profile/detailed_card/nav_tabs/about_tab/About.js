import React from 'react';

import PokemonDescription from './PokemonDescription.js';
import Measurements from './Measurements.js';

import './styles/About.css';

class About extends React.Component {
    render() {
        return (
            <div id="aboutContainer">
                <PokemonDescription />
                <Measurements />
            </div>
        )
    }
}

export default About;