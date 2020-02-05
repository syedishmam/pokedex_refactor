import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './styles/SearchResult.css';

class SearchResult extends React.Component {
    render() {
        return (
            <div id="searchResultContainer">
                <Link to={`/profile/${this.props.pokemonName}`}>
                    <img src={this.props.search.sprites.front_default} alt="pokemon sprite" />
                    <p>{this.props.search.species.name}</p>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {pokemonName: state.pokemonData.data.species.name}
}

export default connect(mapStateToProps)(SearchResult);