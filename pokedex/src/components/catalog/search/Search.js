import React from 'react';
import {connect} from 'react-redux';

import SearchBar from './SearchBar.js';
import SearchResult from './SearchResult.js';
import pokeApi from '../../../api/pokeApi.js';

import {storePokemonData, changeTheme} from '../../../actions';

class Search extends React.Component {

    state = {searchQuery: ''};

    //Fetch pokemon from API
    fetchPokemon = async (pokemon) => {
        const response = await pokeApi.get('pokemon/' + pokemon);
        const speciesData = await pokeApi.get('pokemon-species/' + response.data.id);
        this.props.storePokemonData(response.data, speciesData.data);
        console.log(speciesData.data);
    }

    //Fetch pokemon on Enter keypress
    onEnterKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.fetchPokemon(this.state.searchQuery);
        }
    }

    orderTypesByImportance = (types) => {
        if(types[1] === "Water" || types[1] === "Fire" || types[1] === "Grass" || types[1] === "Ground"  || types[1] === "Electric") {
            const temp = types[0];
            types[0] = types[1];
            types[1] = temp;
        }
        return types;
    }

    updateSearchQuery = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    //Updates application theme based on pokemon type
    updateTheme = () => {
        if(this.props.pokemonTypes) {
            this.props.changeTheme(this.props.pokemonTypes[0]);
        }
    }

    renderSearchContent() {
        if(this.props.pokemonData) {
            return (
                <div>
                    <SearchBar searchValue={this.state.searchQuery} updateSearchQuery={this.updateSearchQuery} onEnter={this.onEnterKeyPress} fetchPokemon={this.fetchPokemon}/>
                    <SearchResult search={this.props.pokemonData} orderTypes={this.orderTypesByImportance} theme={this.props.theme} />
                </div>
            )
        } else {
            return (
                <SearchBar searchValue={this.state.searchQuery} updateSearchQuery={this.updateSearchQuery} onEnter={this.onEnterKeyPress} fetchPokemon={this.fetchPokemon}/>
            )
        }
    }

    componentDidUpdate() {
        this.updateTheme();
    }

    render() {
        return(
            <div id="searchContainer">
                {this.renderSearchContent()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemonData: state.pokemonData.data,
        pokemonTypes: state.pokemonData.types,
        theme: state.theme.theme
    }
}

export default connect(mapStateToProps, {storePokemonData, changeTheme})(Search);