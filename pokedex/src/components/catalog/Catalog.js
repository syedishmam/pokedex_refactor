import React from 'react';

import Search from './search/Search.js';
import Browse from './browse/Browse.js';

import './styles/Catalog.css';

class Catalog extends React.Component {
    render() {
        return (
            <div id="catalogContainer">
                <div id="catalogHeader">
                    <button id="logOutButton">Log Out</button>
                    <h1 id="title">Pokedex</h1>
                    <h3 id="welcomeMessage">Welcome, User!</h3>
                </div>
                <Search />
                <Browse />
            </div>
        )
    }
}

export default Catalog;