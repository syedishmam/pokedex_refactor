import React from 'react';

class SearchResult extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.search.sprites.front_default} alt="pokemon sprite" />
            </div>
        )
    }
}

export default SearchResult;