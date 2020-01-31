import React from 'react';
import {connect} from 'react-redux';

import {displayAbout, displayBaseStats, displayEvolution, displayMoves} from '../../../../actions';
import './styles/DetailedInfoNav.css';

class DetailedInfoNav extends React.Component {
    render() {
        return (
            <div id="detailedInfoNavBarContainer">
                <button className="detailedInfoNavButton" onClick={() => this.props.displayAbout('about')}>About</button>
                <button className="detailedInfoNavButton" onClick={() => this.props.displayBaseStats('base_stats')}>Base Stats</button>
                <button className="detailedInfoNavButton" onClick={() => this.props.displayEvolution('evolution')}>Evolution</button>
                <button className="detailedInfoNavButton" onClick={() => this.props.displayMoves('moves')}>Moves</button>
            </div>
        )
    }
}

export default connect(null, {displayAbout, displayBaseStats, displayEvolution, displayMoves})(DetailedInfoNav);