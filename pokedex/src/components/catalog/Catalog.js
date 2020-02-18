import React from 'react';

import Search from './search/Search.js'

import './styles/Catalog.css';

class Catalog extends React.Component {
    render() {
        return (
            <div id="catalogContainer">
                <h1>Pokedex</h1>
                <Search />
            </div>
        )
    }
}

export default Catalog;