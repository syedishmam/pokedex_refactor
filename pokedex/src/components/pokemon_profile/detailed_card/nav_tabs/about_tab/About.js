import React from 'react';
import {connect} from 'react-redux';

import './styles/About.css';

class About extends React.Component {

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
                                    <td className="infoBoxStatCell">Height: 5'7(170cm)</td>
                                    <td className="infoBoxStatCell">Weight: 200bs(90.5kg)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 id="measurementsHeading">More Info</h3>
                    <div className="floatingBox">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="infoBoxStatCell">Growth Rate: 50</td>
                                    <td className="infoBoxStatCell">Capture Rate: 50</td>
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
        pokemonDesc: state.pokemonData.pokemonDesc
    }
}

export default connect(mapStateToProps)(About);