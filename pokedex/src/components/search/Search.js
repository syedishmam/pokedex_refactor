import React from 'react';

import pokeApi from '../../api/pokeApi.js';

class Search extends React.Component {

    state = {searchQuery: ''};

    fetchPokemon = async (pokemon) => {
        const response = await pokeApi.get('pokemon/' + pokemon)
        console.log(response.data.species);
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
                <input type="text" value={this.state.searchQuery} onChange={this.updateSearchQuery} onKeyPress={this.onEnterKeyPress}/>
                <button onClick={() => this.fetchPokemon(this.state.searchQuery)}>Submit</button>
            </div>
        )
    }
}

export default Search;