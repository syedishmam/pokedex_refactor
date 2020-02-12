import React from 'react';
import {connect} from 'react-redux';

import SearchBar from './SearchBar.js';
import SearchResult from './SearchResult.js';
import pokeApi from '../../api/pokeApi.js';

import {storePokemonData, changeTheme} from '../../actions';

import './styles/Search.css';

class Search extends React.Component {

    state = {searchQuery: ''};

    fetchPokemon = async (pokemon) => {
        const response = await pokeApi.get('pokemon/' + pokemon);
        const speciesData = await pokeApi.get('pokemon-species/' + response.data.id);
        this.props.storePokemonData(response.data, speciesData.data);
        console.log(speciesData.data);
    }

    onEnterKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.fetchPokemon(this.state.searchQuery);
        }
    }

    updateSearchQuery = (event) => {
        this.setState({ searchQuery: event.target.value });
        console.log(this.state.searchQuery);
    }

    updateTheme = () => {
        if(this.props.pokemonTypes) {
            this.props.changeTheme(this.props.pokemonTypes[0].type.name);
        }
    }

    renderSearchContent() {
        if(this.props.pokemonData) {
            return (
                <div>
                    <SearchBar searchValue={this.state.searchQuery} updateSearchQuery={this.updateSearchQuery} onEnter={this.onEnterKeyPress} fetchPokemon={this.fetchPokemon}/>
                    <SearchResult search={this.props.pokemonData} theme={this.props.theme} />
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
        pokemonTypes: state.pokemonData.data.types,
        theme: state.theme.theme
    }
}

export default connect(mapStateToProps, {storePokemonData, changeTheme})(Search);