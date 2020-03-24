import React from 'react';
import {connect} from 'react-redux';

import './styles/About.css';

class About extends React.Component {

    /*Possible About Additions
        - Base Happiness
        - Capture Rate
        - Generation Released In
        - Habitat
        - Growth Rate
    */

    render() {
        return (
            <span>
                <p id="description">{this.props.pokemonDesc}</p>
                <div>
                    <h3 id="measurementsHeading">Measurements</h3>
                    <div class="floatingBox">
                        <p id="height">Height: 5'7(170cm)</p>
                        <p id="weight">Weight: 200bs(90.5kg)</p>
                    </div>
                    <h3 id="measurementsHeading">More Info</h3>
                    <div class="floatingBox">
                        <p id="height">Growth Rate: 45</p>
                        <p id="weight">Capture Rate: 24</p>
                    </div>
                </div>
            </span>
        ) 
    }

}

const mapStateToProps = (state) => {
    return {
        pokemonDesc: state.pokemonData.pokemonDesc
    }
}

export default connect(mapStateToProps)(About);