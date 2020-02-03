import React from 'react';
import {connect} from 'react-redux';

import SearchBar from './SearchBar.js';
import SearchResult from './SearchResult.js';
import pokeApi from '../../api/pokeApi.js';

import {storePokemonData} from '../../actions';

import './styles/Search.css';

class Search extends React.Component {

    state = {searchQuery: ''};

    fetchPokemon = async (pokemon) => {
        const response = await pokeApi.get('pokemon/' + pokemon)
        this.props.storePokemonData(response.data);
        console.log(response.data);
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

    renderSearchContent() {
        if(this.props.pokemonData) {
            return (
                <div>
                    <SearchBar searchValue={this.state.searchQuery} updateSearchQuery={this.updateSearchQuery} onEnter={this.onEnterKeyPress} fetchPokemon={this.fetchPokemon}/>
                    <SearchResult search={this.props.pokemonData} />
                </div>
            )
        } else {
            return (
                <SearchBar searchValue={this.state.searchQuery} updateSearchQuery={this.updateSearchQuery} onEnter={this.onEnterKeyPress} fetchPokemon={this.fetchPokemon}/>
            )
        }
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
    return {pokemonData: state.pokemonData.data}
}

export default connect(mapStateToProps, {storePokemonData})(Search);