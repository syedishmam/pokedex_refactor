import React from 'react';
import {connect} from 'react-redux';

import About from './about_tab/About.js';
import BaseStats from './base_stats_tab/BaseStats.js';

import './styles/DetailedInfoTab.css';

class DetailedInfoTab extends React.Component {

    renderInfo() {
        if(this.props.infoShown === 'about') {
            return (
                <About />
            )
        } else if(this.props.infoShown === 'base_stats') {
            return (
                <BaseStats />
            )
        }
    }

    render() {
        return (
            <div id="detailedInfoTabContainer">
                {this.renderInfo()}
            </div>
        ) 
    }
}

const mapStateToProps = (state) => {
    return {infoShown: state.infoShown.infoShown}
}

export default connect(mapStateToProps)(DetailedInfoTab);