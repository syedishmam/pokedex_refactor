import React from 'react';
import {connect} from 'react-redux';

import './styles/About.css';

class About extends React.Component {

    formatGrowthRate(growthRate) {
        let formattedGrowthRate = growthRate.split('-', 2)[0];
        return formattedGrowthRate.charAt(0).toUpperCase() + formattedGrowthRate.slice(1);
    }

    convertHeight(height) {
        const cm = height * 10;
        var realFeet = ((cm*0.393700) / 12);
        var feet = Math.floor(realFeet);
        var inches = Math.round((realFeet - feet) * 12);
        return "Height: " + feet + "'" + inches + ' (' + cm + 'cm)';
    }

    convertWeight(weight) {
        const kg = weight / 10;
        const lbs = Math.round(kg * 2.20462);
        return "Weight: " + lbs + "lbs (" + kg + "kg)";
    }

    render() {
        return (
            <span>
                <p id="description">{this.props.pokemonDesc}</p>
                <div>
                    <h3 id="measurementsHeading">Measurements</h3>
                    <div className="floatingBox">
                    <table>
                            <tbody>
                                <tr>
                                    <td className="infoBoxStatCell">{this.convertHeight(this.props.pokemonHeight)}</td>
                                    <td className="infoBoxStatCell">{this.convertWeight(this.props.pokemonWeight)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 id="measurementsHeading">More Info</h3>
                    <div className="floatingBox">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="infoBoxStatCell">Growth Rate: {this.formatGrowthRate(this.props.pokemonGrowthRate)}</td>
                                    <td className="infoBoxStatCell">Capture Rate: {this.props.pokemonCaptureRate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </span>
        ) 
    }

}

const mapStateToProps = (state) => {
    return {
        pokemonDesc: state.pokemonData.pokemonDesc,
        pokemonCaptureRate: state.pokemonData.speciesData.capture_rate,
        pokemonGrowthRate: state.pokemonData.speciesData.growth_rate.name,
        pokemonHeight: state.pokemonData.data.height,
        pokemonWeight: state.pokemonData.data.weight
    }
}

export default connect(mapStateToProps)(About);