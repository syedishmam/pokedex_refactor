import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {storePokemonDescEnglish, storePokemonTypes, changeTheme} from '../../../actions/index.js'

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
        let textColor;
        const pokemonTypesArray = [];
        for(let i = 0; i < this.props.pokemonTypes.length; i++) {
            const currentPokemonType = this.props.pokemonTypes[i].type.name;
            pokemonTypesArray.push(this.capitalizeFirstChar(currentPokemonType));
        }
        if(pokemonTypesArray.length === 2) {
            const orderedTypes = this.props.orderTypesAndStore(pokemonTypesArray, this.props.storePokemonTypes);
            console.log(orderedTypes);
            this.props.updateTheme(orderedTypes, this.props.changeTheme);
            textColor = {color: this.props.theme};
            return (
                <div>
                    <p style={textColor} className="type">{orderedTypes[0]}</p>
                    <p style={textColor} className="type">{orderedTypes[1]}</p>
                </div>
            )
        } else {
            this.props.storePokemonTypes(pokemonTypesArray);
            this.props.updateTheme(pokemonTypesArray, this.props.changeTheme);
            textColor = {color: this.props.theme}
            return (
                <p style={textColor} className="type">{pokemonTypesArray[0]}</p>
            )
        }
    }

    //Rerenders SearchResult every time a new theme is required
    renderSearchResults() {
        const backgroundColor = {backgroundColor: this.props.theme}
        return (
            <div id="searchResultContainer" style={backgroundColor} >
                <img id="pokemonImage" src={this.props.search.sprites.front_default} alt="pokemon sprite" />
                <div id="infoCard">
                    <h3 id="pokemonName">{this.capitalizeFirstChar(this.props.search.species.name)}</h3>
                    {this.renderTypes()}
                    <p className="description">{this.getEnglishPokemonDescription()}</p>
                    <h3 id="moreInfoBanner">Click For More Info</h3>
                </div>
            </div>
        )
    }

    render() { 


       return (
            <Link to={`/profile/${this.props.pokemonName}`}>
                {this.renderSearchResults()}
            </Link>
        )
    }
}

const mapStateToProps = (state) => {
    return {
            pokemonName: state.pokemonData.data.species.name,
            pokemonTypes: state.pokemonData.data.types,
            pokemonDescs: state.pokemonData.speciesData.flavor_text_entries,
            themeColor: state.theme.theme
        }
}

export default connect(mapStateToProps, {storePokemonDescEnglish, storePokemonTypes, changeTheme})(SearchResult);