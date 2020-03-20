import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {storePokemonDescEnglish, storePokemonTypes, changeTheme} from '../../../actions/index.js';
import {capitalizeFirstChar} from '../../../api/apiFunctions.js';

import './styles/SearchResult.css';

class SearchResult extends React.Component {

    //Export english flavor text from array of descriptions in numerous languages
    getEnglishPokemonDescription() {
        const englishDesc = this.props.pokemonDescs.find(desc => desc.language.name === 'en');
        this.props.storePokemonDescEnglish(englishDesc.flavor_text);
        return englishDesc.flavor_text;
    }

    //Puts pokemon types in order of importance
    //Changes theme color based on ordered types
    //Renders up to two types 
    renderTypes() {
        const orderedTypes = this.props.orderTypesAndStore(this.props.pokemonTypes, this.props.storePokemonTypes);
        this.props.updateTheme(orderedTypes, this.props.changeTheme);
        if(orderedTypes.length === 2) {
            return (
                <div>
                    <p className="type">{orderedTypes[0]}</p>
                    <p className="type">{orderedTypes[1]}</p>
                </div>
            )
        } else {
            return (
                <p className="type">{orderedTypes[0]}</p>
            )
        }
    }

    //Rerenders SearchResult every time a new theme is required
    renderSearchResults() {
        const backgroundColor = {backgroundColor: this.props.themeColor}
        return (
            <div id="searchResultContainer" style={backgroundColor} >
                <img id="pokemonImage" src={this.props.search.sprites.front_default} alt="pokemon sprite" />
                <div id="infoCard">
                    <h3 id="pokemonName">{capitalizeFirstChar(this.props.search.species.name)}</h3>
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