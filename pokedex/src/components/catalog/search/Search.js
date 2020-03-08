import React from 'react';
import {connect} from 'react-redux';

import SearchBar from './SearchBar.js';
import SearchResult from './SearchResult.js';
import {fetchPokemon, orderTypesByImportance, updateTheme} from '../../../api/apiFunctions.js';

import {storePokemonData, changeTheme} from '../../../actions';

class Search extends React.Component {

    state = {searchQuery: ''};

    //Fetch pokemon on Enter keypress
    onEnterKeyPress = (event) => {
        if(event.key === 'Enter') {
            fetchPokemon(this.state.searchQuery, this.props.storePokemonData);
        }
    }

    updateSearchQuery = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    renderSearchContent() {
        if(this.props.pokemonData) {
            return (
                <span>
                    <SearchBar searchValue={this.state.searchQuery} updateSearchQuery={this.updateSearchQuery} onEnter={this.onEnterKeyPress} fetchPokemon={this.fetchPokemon}/>
                    <SearchResult search={this.props.pokemonData} orderTypesAndStore={orderTypesByImportance} theme={this.props.theme} />
                    {updateTheme(this.props.pokemonTypes, this.props.changeTheme)}
                </span>
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
    return {
        pokemonData: state.pokemonData.data,
        pokemonTypes: state.pokemonData.types,
        theme: state.theme.theme
    }
}

export default connect(mapStateToProps, {storePokemonData, changeTheme})(Search);