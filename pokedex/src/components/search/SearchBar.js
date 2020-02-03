import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.searchValue} onChange={this.props.updateSearchQuery} onKeyPress={this.props.onEnter}/>
                <button onClick={() => this.props.fetchPokemon(this.props.searchValue)}>Submit</button>
            </div>
        )
    }
}

export default SearchBar;