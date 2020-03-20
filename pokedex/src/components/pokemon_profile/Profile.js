import React from 'react';
import {connect} from 'react-redux';

import GenInfo from './gen_card/GenInfo.js';
import {storePokemonData, storePokemonTypes, storePokemonDescEnglish, changeTheme} from '../../actions/index.js';
import {fetchPokemon, orderTypesByImportance, updateTheme, getEnglishPokemonDescription} from '../../api/apiFunctions.js';

import './styles/Profile.css';
import DetailedInfo from './detailed_card/DetailedInfo.js';

class Profile extends React.Component {

    performApiFunctions = async () => {
        const response = await fetchPokemon(document.URL.substring(30), this.props.storePokemonData);
        const orderedTypes = orderTypesByImportance(response.types, this.props.storePokemonTypes);
        updateTheme(orderedTypes, this.props.changeTheme);
        getEnglishPokemonDescription(this.props.pokemonDescs, this.props.storePokemonDescEnglish);
    }

    renderProfile() {
        let themeColor = {backgroundColor: this.props.themeColor};

        if(this.props.pokemonData) {
            return (
                <div style={themeColor}>
                    <GenInfo theme={this.props.themeColor}/>
                    <DetailedInfo theme={this.props.themeColor}/>
                </div>
            ) 
        } else {
            this.performApiFunctions();
        }
    }

    render() {
        return (
            <div className="profileContainer">
                {this.renderProfile()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemonData: state.pokemonData.data,
        pokemonDescs: state.pokemonData.speciesData.flavor_text_entries,
        themeColor: state.theme.theme
    }
}

export default connect(mapStateToProps, {storePokemonData, storePokemonTypes, storePokemonDescEnglish, changeTheme})(Profile);