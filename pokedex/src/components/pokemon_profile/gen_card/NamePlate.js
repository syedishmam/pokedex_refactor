import React from 'react';
import {connect} from 'react-redux';

import {capitalizeFirstChar} from '../../../api/apiFunctions.js';

import './styles/NamePlate.css';

class NamePlate extends React.Component {

    renderPokemonProfile() {
        if(this.props.pokemonPicture && this.props.pokemonName) {
            return(
                <div>
                    <h1 className="pokemonName">{capitalizeFirstChar(this.props.pokemonName)}</h1>
                    {this.renderTypes()}
                    <img id="pokemonSprite" src={this.props.pokemonPicture} alt="Pokemon Sprite" />
                </div>
            )
        } else {
            return (
                <p>Pokemon Profile</p>
            )
        }
    }

    renderTypes() {
        const types = this.props.pokemonTypes;
        if(types.length === 2) {
            return (
                <div>
                    <p className="typeCell">{types[0]}</p>
                    <p className="typeCell">{types[1]}</p>
                </div>
            )
        } else {
            return (
                <p className="typeCell">{types[0]}</p>
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
        pokemonName: state.pokemonData.data.species.name,
        pokemonPicture: state.pokemonData.data.sprites.front_default,
        pokemonTypes: state.pokemonData.types
    }
}

export default connect(mapStateToProps)(NamePlate);