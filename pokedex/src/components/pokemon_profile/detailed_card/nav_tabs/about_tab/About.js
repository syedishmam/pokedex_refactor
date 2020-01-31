import React from 'react';
import {connect} from 'react-redux';

import PokemonDescription from './PokemonDescription.js';
import Measurements from './Measurements.js';

import './styles/About.css';

class About extends React.Component {

    renderAbout() {
        if(this.props.infoShown === 'about') {
            return (
                <div id="aboutContainer">
                    <PokemonDescription />
                    <Measurements />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAbout()}
            </div>
        ) 
    }
}

const mapStateToProps = (state) => {
    return {infoShown: state.infoShown.infoShown}
}

export default connect(mapStateToProps)(About);