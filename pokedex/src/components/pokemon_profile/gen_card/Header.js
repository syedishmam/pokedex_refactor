import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {displayTab} from '../../../actions/index.js';

import './styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="headerContainer">
                <Link className="backButton" to={'/catalog'}><i className="fas fa-arrow-left" onClick={() => this.props.displayTab('about')}></i></Link>
                <button className="favoriteButton"><i className="far fa-heart"></i></button>
            </div>
        )
    }
}

export default connect(null, {displayTab})(Header);