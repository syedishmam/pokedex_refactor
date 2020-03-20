import React from 'react';
import {connect} from 'react-redux';

class About extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.pokemonDesc}</p>
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