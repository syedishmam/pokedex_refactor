import React from 'react';
import {connect} from 'react-redux';

import './styles/BaseStats.css';

class BaseStats extends React.Component {

    storeStats(pokemonStats) {
        let stats = {
            HP: pokemonStats[5].base_stat,
            Atk: pokemonStats[4].base_stat,
            Def: pokemonStats[3].base_stat,
            SpAtk: pokemonStats[2].base_stat,
            SpDef: pokemonStats[1].base_stat,
            Spd: pokemonStats[0].base_stat,
            Tot: null
        }
        //Add up base stats for total
        stats.Tot = stats.HP + stats.Atk + stats.Def + stats.SpAtk + stats.SpDef + stats.Spd;

        return stats;
    }

    renderStats(pokemonStats) {
        const stats = this.storeStats(pokemonStats);

        return (
            <table id="statsTable">
                <tbody>
                    <tr>
                        <td className="statName">HP</td>
                        <td className="statInteger">{stats.HP}</td>
                        <td className="progressBarContainer">
                            <div className="progressBarEmpty">
                                <div className="progressBarFill"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="statName">Atk</td>
                        <td className="statInteger">{stats.Atk}</td>
                        <td className="progressBarContainer">
                            <div className="progressBarEmpty">
                                <div className="progressBarFill"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="statName">Def</td>
                        <td className="statInteger">{stats.Def}</td>
                        <td className="progressBarContainer">
                            <div className="progressBarEmpty">
                                <div className="progressBarFill"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="statName">Sp. Atk</td>
                        <td className="statInteger">{stats.SpAtk}</td>
                        <td className="progressBarContainer">
                            <div className="progressBarEmpty">
                                <div className="progressBarFill"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="statName">Sp. Def</td>
                        <td className="statInteger">{stats.SpDef}</td>
                        <td className="progressBarContainer">
                            <div className="progressBarEmpty">
                                <div className="progressBarFill"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="statName">Speed</td>
                        <td className="statInteger">{stats.Spd}</td>
                        <td className="progressBarContainer">
                            <div className="progressBarEmpty">
                                <div className="progressBarFill"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="statName">Total</td>
                        <td className="statInteger">{stats.Tot}</td>
                        <td className="progressBarContainer">
                            <div className="progressBarEmpty">
                                <div className="progressBarFill"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render() {
        return(
            <div>
                {this.renderStats(this.props.pokemonStats)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemonStats: state.pokemonData.data.stats
    }
}

export default connect(mapStateToProps)(BaseStats);