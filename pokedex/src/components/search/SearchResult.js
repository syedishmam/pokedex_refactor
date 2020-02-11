import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {storePokemonDescEnglish} from '../../actions/index.js'

import './styles/SearchResult.css';

class SearchResult extends React.Component {

    capitalizeFirstChar(pokemon) {
        const capitalize = pokemon.substring(0, 1).toUpperCase().concat(pokemon.substring(1));
        return capitalize;
    }

    //Export english flavor text from array of descriptions in numerous languages
    getEnglishPokemonDescription() {
        const englishDesc = this.props.pokemonDescs.find(desc => desc.language.name === 'en');
        this.props.storePokemonDescEnglish(englishDesc.flavor_text);
        return englishDesc.flavor_text;
    }

    //Displays up to 2 types for selected pokemon 
    renderTypes() {
        const pokemonTypesArray = [];
        for(let i = 0; i < this.props.pokemonTypes.length; i++) {
            const currentPokemonType = this.props.pokemonTypes[i].type.name;
            pokemonTypesArray.push(this.capitalizeFirstChar(currentPokemonType));
        }
        if(pokemonTypesArray.length === 2) {
            return (
                <div>
                    <p className="type">{pokemonTypesArray[0]}</p>
                    <p className="type">{pokemonTypesArray[1]}</p>
                </div>
            )
        } else {
            return (
                <p className="type">{pokemonTypesArray[0]}</p>
            )
        }
    }

    render() {
        return (
            <Link to={`/profile/${this.props.pokemonName}`} id="searchResultContainer">
                <img id="pokemonImage" src={this.props.search.sprites.front_default} alt="pokemon sprite" />
                <div id="infoCard">
                    <h3 id="pokemonName">{this.capitalizeFirstChar(this.props.search.species.name)}</h3>
                    {this.renderTypes()}
                    <p className="description">{this.getEnglishPokemonDescription()}</p>
                </div>
            </Link>
        )
    }
}

const mapStateToProps = (state) => {
    return {pokemonName: state.pokemonData.data.species.name,
            pokemonTypes: state.pokemonData.data.types,
            pokemonDescs: state.pokemonData.speciesData.flavor_text_entries
        }
}

export default connect(mapStateToProps, {storePokemonDescEnglish})(SearchResult);