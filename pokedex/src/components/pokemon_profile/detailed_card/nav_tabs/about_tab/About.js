import React from 'react';
import {connect} from 'react-redux';

class About extends React.Component {

    render() {
        return (
            <div>
                <p id="description">{this.props.pokemonDesc}</p>
                <h3>Details:</h3>
            </div>
        ) 
    }
    
}

const mapStateToProps = (state) => {
    return {
        pokemonDesc: state.pokemonData.pokemonDesc
    }
}

export default connect(mapStateToProps)(About);