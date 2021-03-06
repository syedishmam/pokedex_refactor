import React from 'react';
import {connect} from 'react-redux';

import {displayTab} from '../../../../actions';
import './styles/DetailedInfoNav.css';

class DetailedInfoNav extends React.Component {

    /*TODO:
        - BUG: When user selects tab other than About and backs out into Catalog 
               and reclicks searched pokemon, the nav selector shows About but
               what is shown below is the last tab viewed.
    */

    state = {
        abtBorder: {borderBottom: "solid 3px #00A7E1", color: "black"},
        statBorder: {borderBottom: "solid 3px lightgrey", color: "grey"},
        evoBorder: {borderBottom: "solid 3px lightgrey", color: "grey"},
        moveBorder: {borderBottom: "solid 3px lightgrey", color: "grey"}
    }

    navButtonClick(tabName) {
        switch(tabName) {
            case "about":
                this.props.displayTab('about');
                this.setState({
                    abtBorder: {borderBottom: "solid 3px #00A7E1", color: "black"},
                    statBorder: {borderBottom: "solid 3px lightgrey", color: "grey"},
                    evoBorder: {borderBottom: "solid 3px lightgrey", color: "grey"},
                    moveBorder: {borderBottom: "solid 3px lightgrey", color: "grey"}
                });
                break;

            case "base_stats":
                this.props.displayTab('base_stats');
                this.setState({
                    abtBorder: {borderBottom: "solid 3px lightgrey", color: "grey"},
                    statBorder: {borderBottom: "solid 3px #00A7E1", color: "black"},
                    evoBorder: {borderBottom: "solid 3px lightgrey", color: "grey"},
                    moveBorder: {borderBottom: "solid 3px lightgrey", color: "grey"}
                });
                break;

            case "evolution":
                this.props.displayTab('evolution');
                this.setState({
                    abtBorder: {borderBottom: "solid 3px lightgrey", color: "grey"},
                    statBorder: {borderBottom: "solid 3px lightgrey", color: "grey"},
                    evoBorder: {borderBottom: "solid 3px #00A7E1", color: "black"},
                    moveBorder: {borderBottom: "solid 3px lightgrey", color: "grey"}
                });
                break;

            case "moves":
                this.props.displayTab('moves');
                this.setState({
                    abtBorder: {borderBottom: "solid 3px lightgrey", color: "grey"},
                    statBorder: {borderBottom: "solid 3px lightgrey", color: "grey"},
                    evoBorder: {borderBottom: "solid 3px lightgrey", color: "grey"},
                    moveBorder: {borderBottom: "solid 3px #00A7E1", color: "black"}
                });
                break;

            default: 
                return
        }
    }

    render() {

        return (
            <div id="detailedInfoNavBarContainer">
                <button className="detailedInfoNavButton" style={this.state.abtBorder} onClick={() => this.navButtonClick('about')}>About</button>
                <button className="detailedInfoNavButton" style={this.state.statBorder} onClick={() => this.navButtonClick('base_stats')}>Base Stats</button>
                <button className="detailedInfoNavButton" style={this.state.evoBorder} onClick={() => this.navButtonClick('evolution')}>Evolution</button>
                <button className="detailedInfoNavButton" style={this.state.moveBorder} onClick={() => this.navButtonClick('moves')}>Moves</button>
            </div>
        )
    }
}

export default connect(null, {displayTab})(DetailedInfoNav);