import React from 'react';

import PokemonDescription from './PokemonDescription.js';
import Measurements from './Measurements.js';

import './styles/About.css';

class About extends React.Component {

    renderAbout() {
        return (
            <div id="aboutContainer">
                <PokemonDescription />
                <Measurements />
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderAbout()}
            </div>
        ) 
    }
}

export default About;