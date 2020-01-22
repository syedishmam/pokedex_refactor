import React from 'react';

import './styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="headerContainer">
                <button className="backButton">Back</button>
                <button className="favoriteButton">Favorite</button>
            </div>
        )
    }
}

export default Header;