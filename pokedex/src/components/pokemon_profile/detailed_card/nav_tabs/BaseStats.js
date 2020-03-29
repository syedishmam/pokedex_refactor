import React from 'react';
import {connect} from 'react-redux';

import {storeStats} from '../../../../actions/index.js';

import './styles/BaseStats.css';

class BaseStats extends React.Component {

    compileStats(pokemonStats) {
        let statsObj = {
            HP: pokemonStats[5].base_stat,
            Atk: pokemonStats[4].base_stat,
            Def: pokemonStats[3].base_stat,
            SpAtk: pokemonStats[2].base_stat,
            SpDef: pokemonStats[1].base_stat,
            Spd: pokemonStats[0].base_stat,
            Tot: null
        } 
        statsObj.Tot = statsObj.HP + statsObj.Atk + statsObj.Def + statsObj.SpAtk + statsObj.SpDef + statsObj.Spd;

        const relativeStatStrength = this.calculateStatRelativeStrength(statsObj);
        this.props.storeStats({integerStats: statsObj, relativeStats: relativeStatStrength});
    }

    calculateStatRelativeStrength(pokemonStatsObj) {
        const MAX_HP = 255;
        const MAX_ATK = 190;
        const MAX_DEF = 230;
        const MAX_SP_ATK = 173;
        const MAX_SP_DEF = 230;
        const MAX_SPD = 180;

        const relativeHP = Math.round(pokemonStatsObj.HP / MAX_HP * 100);
        const relativeAtk = Math.round(pokemonStatsObj.Atk / MAX_ATK * 100);
        const relativeDef = Math.round(pokemonStatsObj.Def / MAX_DEF * 100);
        const relativeSpAtk = Math.round(pokemonStatsObj.SpAtk / MAX_SP_ATK * 100);
        const relativeSpDef = Math.round(pokemonStatsObj.SpDef / MAX_SP_DEF * 100);
        const relativeSpd = Math.round(pokemonStatsObj.Spd / MAX_SPD * 100);

        const relativeStatStrength = {
            hpProgressFill: relativeHP,
            AtkProgressFill: relativeAtk,
            DefProgressFill: relativeDef,
            SpAtkProgressFill: relativeSpAtk,
            SpDefProgressFill: relativeSpDef,
            SpdProgressFill: relativeSpd
        };

        return relativeStatStrength;
    }

    renderStats(pokemonStats) {
        return (
            <table id="statsTable">
                <tbody>
                    <tr>
                        <td className="statName">HP</td>
                        <td className="statInteger">{this.state.stats.HP}</td>
                        <td className="progressBarContainer">
                            <div className="progressBarEmpty">
                                <div className="progressBarFill"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="statName">Attack</td>
                        <td className="statInteger">{this.state.stats.Atk}</td>
                        <td className="progressBarContainer">
                            <div className="progressBarEmpty">
                                <div className="progressBarFill"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="statName">Defense</td>
                        <td className="statInteger">{this.state.stats.Def}</td>
                        <td className="progressBarContainer">
                            <div className="progressBarEmpty">
                                <div className="progressBarFill"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="statName">Sp. Atk</td>
                        <td className="statInteger">{this.state.stats.SpAtk}</td>
                        <td className="progressBarContainer">
                            <div className="progressBarEmpty">
                                <div className="progressBarFill"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="statName">Sp. Def</td>
                        <td className="statInteger">{this.state.stats.SpDef}</td>
                        <td className="progressBarContainer">
                            <div className="progressBarEmpty">
                                <div className="progressBarFill"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="statName">Speed</td>
                        <td className="statInteger">{this.state.stats.Spd}</td>
                        <td className="progressBarContainer">
                            <div className="progressBarEmpty">
                                <div className="progressBarFill"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="statName">Total</td>
                        <td className="statInteger">{this.state.stats.Tot}</td>
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
                {this.compileStats(this.props.pokemonStats)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemonStats: state.pokemonData.data.stats
    }
}

export default connect(mapStateToProps, {storeStats})(BaseStats);