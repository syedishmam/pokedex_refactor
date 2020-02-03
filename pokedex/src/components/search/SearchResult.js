import React from 'react';

import './styles/SearchResult.css';

class SearchResult extends React.Component {
    render() {
        return (
            <div id="searchResultContainer">
                <img src={this.props.search.sprites.front_default} alt="pokemon sprite" />
                <p>{this.props.search.species.name}</p>
            </div>
        )
    }
}

export default SearchResult;