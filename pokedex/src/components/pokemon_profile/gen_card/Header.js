import React from 'react';

import {Link} from 'react-router-dom';

import './styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="headerContainer">
                <Link className="backButton" to={'/catalog'}><i className="fas fa-arrow-left"></i></Link>
                <button className="favoriteButton"><i className="far fa-heart"></i></button>
            </div>
        )
    }
}

export default Header;