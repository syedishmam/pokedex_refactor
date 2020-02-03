import React from 'react';

import SearchBar from './SearchBar.js';
import pokeApi from '../../api/pokeApi.js';

class Search extends React.Component {

    state = {searchQuery: ''};

    fetchPokemon = async (pokemon) => {
        const response = await pokeApi.get('pokemon/' + pokemon)
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

    render() {
        return(
            <div>
                <SearchBar searchValue={this.state.searchQuery} updateSearchQuery={this.updateSearchQuery} onEnter={this.onEnterKeyPress} fetchPokemon={this.fetchPokemon}/>
            </div>
        )
    }
}

export default Search;