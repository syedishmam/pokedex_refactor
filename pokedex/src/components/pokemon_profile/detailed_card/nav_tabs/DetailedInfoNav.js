import React from 'react';
import {connect} from 'react-redux';

import {displayAbout, displayBaseStats, displayEvolution, displayMoves} from '../../../../actions';
import './styles/DetailedInfoNav.css';

class DetailedInfoNav extends React.Component {

    state = {
        abtBorder: {borderBottom: "solid 3px gray"},
        statBorder: {borderBottom: "solid 3px gray"},
        evoBorder: {borderBottom: "solid 3px gray"},
        moveBorder: {borderBottom: "solid 3px gray"}
    }

    navButtonClick(tabName) {
        switch(tabName) {
            case "about":
                this.props.displayAbout('about');
                this.setState({
                    abtBorder: {borderBottom: "solid 3px blue"},
                    statBorder: {borderBottom: "solid 3px gray"},
                    evoBorder: {borderBottom: "solid 3px gray"},
                    moveBorder: {borderBottom: "solid 3px gray"}
                });
                break;

            case "base_stats":
                this.props.displayAbout('base_stats');
                this.setState({
                    abtBorder: {borderBottom: "solid 3px gray"},
                    statBorder: {borderBottom: "solid 3px blue"},
                    evoBorder: {borderBottom: "solid 3px gray"},
                    moveBorder: {borderBottom: "solid 3px gray"}
                });
                break;

            case "evolution":
                this.props.displayAbout('evolution');
                this.setState({
                    abtBorder: {borderBottom: "solid 3px gray"},
                    statBorder: {borderBottom: "solid 3px gray"},
                    evoBorder: {borderBottom: "solid 3px blue"},
                    moveBorder: {borderBottom: "solid 3px gray"}
                });
                break;

            case "moves":
                this.props.displayAbout('moves');
                this.setState({
                    abtBorder: {borderBottom: "solid 3px gray"},
                    statBorder: {borderBottom: "solid 3px gray"},
                    evoBorder: {borderBottom: "solid 3px gray"},
                    moveBorder: {borderBottom: "solid 3px blue"}
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

export default connect(null, {displayAbout, displayBaseStats, displayEvolution, displayMoves})(DetailedInfoNav);