import React from 'react';

import PokemonDescription from './PokemonDescription.js';
import Measurements from './Measurements.js';

class About extends React.Component {

    render() {
        return (
            <div>
                <PokemonDescription />
                <Measurements />
            </div>
        ) 
    }
}

export default About;