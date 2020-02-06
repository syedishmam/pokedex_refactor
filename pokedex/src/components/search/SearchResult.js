import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './styles/SearchResult.css';

class SearchResult extends React.Component {

    capitalizePokemonName(pokemon) {
        const capitalize = this.props.search.species.name.substring(0, 1).toUpperCase().concat(pokemon.substring(1));
        return capitalize;
    }

    //Displays up to 2 types for selected pokemon 
    renderTypes() {
        const pokemonTypesArray = [];
        for(let i = 0; i < this.props.pokemonTypes.length; i++) {
            pokemonTypesArray.push(this.props.pokemonTypes[i].type.name);
        }
        if(pokemonTypesArray.length === 2) {
            return (
                <div>
                    <p>{pokemonTypesArray[0]}</p>
                    <p>{pokemonTypesArray[1]}</p>
                </div>
            )
        } else {
            return (
                <p>{pokemonTypesArray[0]}</p>
            )
        }
    }

    render() {
        return (
            <Link to={`/profile/${this.props.pokemonName}`} id="searchResultContainer">
                <img id="pokemonImage" src={this.props.search.sprites.front_default} alt="pokemon sprite" />
                <div id="infoCard">
                    <h3 id="pokemonName">{this.capitalizePokemonName(this.props.search.species.name)}</h3>
                    {this.renderTypes()}
                </div>
            </Link>
        )
    }
}

const mapStateToProps = (state) => {
    return {pokemonName: state.pokemonData.data.species.name, pokemonTypes: state.pokemonData.data.types}
}

export default connect(mapStateToProps)(SearchResult);