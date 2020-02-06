import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './styles/SearchResult.css';

class SearchResult extends React.Component {
    render() {
        return (
            <Link to={`/profile/${this.props.pokemonName}`} id="searchResultContainer">
                <img id="pokemonImage" src={this.props.search.sprites.front_default} alt="pokemon sprite" />
                <p>{this.props.search.species.name}</p>
            </Link>
        )
    }
}

const mapStateToProps = (state) => {
    return {pokemonName: state.pokemonData.data.species.name}
}

export default connect(mapStateToProps)(SearchResult);