import React from 'react';

import './styles/SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div id="searchBarContainer">
                <input id="searchTextField" type="text" value={this.props.searchValue} onChange={this.props.updateSearchQuery} onKeyPress={this.props.onEnter}/>
                <button id="searchButton" onClick={() => this.props.fetchPokemon(this.props.searchValue)}>S</button>
            </div>
        )
    }
}

export default SearchBar;