import React from 'react';
import {connect} from 'react-redux';

import {storeStats} from '../../../../actions/index.js';

import './styles/BaseStats.css';

class BaseStats extends React.Component {

    componentDidMount() {
        this.composeStats(this.props.pokemonStats);
    }

    composeStats(pokemonStats) {
        let statInts = {
            HP: pokemonStats[5].base_stat,
            Atk: pokemonStats[4].base_stat,
            Def: pokemonStats[3].base_stat,
            SpAtk: pokemonStats[2].base_stat,
            SpDef: pokemonStats[1].base_stat,
            Spd: pokemonStats[0].base_stat,
            Tot: null
        } 
        statInts.Tot = statInts.HP + statInts.Atk + statInts.Def + statInts.SpAtk + statInts.SpDef + statInts.Spd;

        const relativeStatStrength = this.calculateStatRelativeStrength(statInts);
        const statBreakdown = this.statBreakdown(statInts);
        this.props.storeStats({integerStats: statInts, relativeStats: relativeStatStrength, breakdownStats: statBreakdown});
    }

    /*
        Return stat strength out of 100 relative to best base stats out of all pokemons.
        Ex) If Blastoise has speed HP of 90, and the highest base speed pokemon has 180, function
            will return 50 (50/100)
    */
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

        const stats = {
            HP: relativeHP,
            Atk: relativeAtk,
            Def: relativeDef,
            SpAtk: relativeSpAtk,
            SpDef: relativeSpDef,
            Spd: relativeSpd
        };

        return stats;
    }

    //Find each stat's share of the integer total of all stats
    statBreakdown(stats) {
        const total = stats.Tot;
        const statBreakdown = {
            hpShare: Math.floor(stats.HP / total * 100),
            atkShare: Math.floor(stats.Atk / total * 100),  
            defShare: Math.floor(stats.Def / total * 100), 
            spAtkShare: Math.floor(stats.SpAtk / total * 100), 
            spDefShare: Math.floor(stats.SpDef / total * 100), 
            spdShare: Math.floor(stats.Spd / total * 100)
        }

        return statBreakdown;
    }

    renderStats() {
        const integerStats = this.props.pokemonStatsComposed.statIntegers;
        const progressBarStats = this.props.pokemonStatsComposed.statRelativeStrength;
        const totalBarStats = this.props.pokemonStatsComposed.statTotalBreakdown;

        const progressBarFill = {
            hpProgressBarWidth: {width: progressBarStats.HP + '%'},
            atkProgressBarWidth: {width: progressBarStats.Atk + '%'},
            defProgressBarWidth: {width: progressBarStats.Def + '%'},
            spAtkProgressBarWidth: {width: progressBarStats.SpAtk + '%'},
            spDefProgressBarWidth: {width: progressBarStats.SpDef + '%'},
            spdProgressBarWidth: {width: progressBarStats.Spd + '%'}
        }

        const totalBarFill = {
            hpShare: {width: totalBarStats.hpShare + '%'},
            atkShare: {width: totalBarStats.atkShare + '%'},
            spAtkShare: {width: totalBarStats.spAtkShare + '%'},
            defShare: {width: totalBarStats.defShare + '%'},
            spDefShare: {width: totalBarStats.spDefShare + '%'},
            spdShare: {width: totalBarStats.spdShare + '%'}
        }

        console.log(totalBarFill);

        return (
            <div id="baseStatsContainer">
                <table id="statsTable">
                    <tbody>
                        <tr>
                            <td className="statName">HP</td>
                            <td className="statInteger">{integerStats.HP}</td>
                            <td className="progressBarContainer">
                                <div className="progressBarEmpty">
                                    <div id="hpBar" className="progressBarFill" style={progressBarFill.hpProgressBarWidth}></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="statName">Attack</td>
                            <td className="statInteger">{integerStats.Atk}</td>
                            <td className="progressBarContainer">
                                <div className="progressBarEmpty">
                                    <div id="atkBar" className="progressBarFill" style={progressBarFill.atkProgressBarWidth}></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="statName">Sp. Atk</td>
                            <td className="statInteger">{integerStats.SpAtk}</td>
                            <td className="progressBarContainer">
                                <div className="progressBarEmpty">
                                    <div id="spAtkBar" className="progressBarFill" style={progressBarFill.spAtkProgressBarWidth}></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="statName">Defense</td>
                            <td className="statInteger">{integerStats.Def}</td>
                            <td className="progressBarContainer">
                                <div className="progressBarEmpty">
                                    <div id="defBar" className="progressBarFill" style={progressBarFill.defProgressBarWidth}></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="statName">Sp. Def</td>
                            <td className="statInteger">{integerStats.SpDef}</td>
                            <td className="progressBarContainer">
                                <div className="progressBarEmpty">
                                    <div id="spDefBar" className="progressBarFill" style={progressBarFill.spDefProgressBarWidth}></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="statName">Speed</td>
                            <td className="statInteger">{integerStats.Spd}</td>
                            <td className="progressBarContainer">
                                <div className="progressBarEmpty">
                                    <div id="spdBar" className="progressBarFill" style={progressBarFill.spdProgressBarWidth}></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="totalContainer">
                    <h3 id="totalSubHeader">Total: {integerStats.Tot}</h3>
                    <div id="totalProgressBar">
                        <div id="hpShare" className="totalProgressBarFill" style={totalBarFill.hpShare}></div>
                        <div id="atkShare" className="totalProgressBarFill" style={totalBarFill.atkShare}></div>
                        <div id="spAtkShare" className="totalProgressBarFill" style={totalBarFill.spAtkShare}></div>
                        <div id="defShare" className="totalProgressBarFill" style={totalBarFill.defShare}></div>
                        <div id="spDefShare" className="totalProgressBarFill" style={totalBarFill.spDefShare}></div>
                        <div id="spdShare" className="totalProgressBarFill" style={totalBarFill.spdShare}></div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return(
            <div>
                {this.renderStats()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemonStats: state.pokemonData.data.stats,
        pokemonStatsComposed: state.pokemonData.pokemonStats
    }
}

export default connect(mapStateToProps, {storeStats})(BaseStats);