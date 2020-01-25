import React from 'react';

import './styles/DetailedInfoNav.css';

class DetailedInfoNav extends React.Component {
    render() {
        return (
            <div id="detailedInfoNavBarContainer">
                <button className="detailedInfoNavButton">About</button>
                <button className="detailedInfoNavButton">Base Stats</button>
                <button className="detailedInfoNavButton">Evolution</button>
                <button className="detailedInfoNavButton">Moves</button>
            </div>
        )
    }
}

export default DetailedInfoNav;