import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './styles/SearchResult.css';

class SearchResult extends React.Component {

    capitalizePokemonName(pokemon) {
        const capitalize = pokemon.substring(0, 1).toUpperCase().concat(pokemon.substring(1));
        return capitalize;
    }

    render() {
        return (
            <Link to={`/profile/${this.props.pokemonName}`} id="searchResultContainer">
                <img id="pokemonImage" src={this.props.search.sprites.front_default} alt="pokemon sprite" />
                <div id="infoCard">
                    <h3 id="pokemonName">{this.capitalizePokemonName(this.props.search.species.name)}</h3>
                    <div>
                        <p>Type</p>
                        <p>Type</p>
                    </div>
                </div>
            </Link>
        )
    }
}

const mapStateToProps = (state) => {
    return {pokemonName: state.pokemonData.data.species.name}
}

export default connect(mapStateToProps)(SearchResult);