import React from 'react';

import {Link} from 'react-router-dom';

import './styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="headerContainer">
                <Link className="backButton" to={'/catalog'}>Back</Link>
                <button className="favoriteButton">Favorite</button>
            </div>
        )
    }
}

export default Header;