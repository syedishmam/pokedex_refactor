import React from 'react';
import {Link} from 'react-router-dom';

import './styles/SearchResult.css';

class SearchResult extends React.Component {
    render() {
        return (
            <div id="searchResultContainer">
                <Link to={'/profile'}>
                    <img src={this.props.search.sprites.front_default} alt="pokemon sprite" />
                    <p>{this.props.search.species.name}</p>
                </Link>
            </div>
        )
    }
}

export default SearchResult;