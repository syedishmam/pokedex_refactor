import React from 'react';
import {connect} from 'react-redux';

import './styles/NamePlate.css';

class NamePlate extends React.Component {

    renderPokemonProfile() {
        if(this.props.pokemonPicture || this.props.pokemonName) {
            return(
                <div>
                    <h1 className="pokemonName">{this.props.pokemonName}</h1>
                    <img id="pokemonSprite" src={this.props.pokemonPicture} alt="Pokemon Sprite" />
                </div>
            )
        } else {
            return (
                <p>Pokemon Profile</p>
            )
        }
    }

    render() {
        return (
            <div className="namePlateContainer">
                {this.renderPokemonProfile()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemonPicture: state.pokemonData.data.sprites.front_default,
        pokemonName: state.pokemonData.data.species.name
    }
}

export default connect(mapStateToProps)(NamePlate);