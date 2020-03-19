import React from 'react';
import {connect} from 'react-redux';

import GenInfo from './gen_card/GenInfo.js';
import {storePokemonData, storePokemonTypes, changeTheme} from '../../actions/index.js';
import {fetchPokemon, orderTypesByImportance, updateTheme} from '../../api/apiFunctions.js';

import './styles/Profile.css';
import DetailedInfo from './detailed_card/DetailedInfo.js';

class Profile extends React.Component {

    performApiFunctions = async () => {
        const response = await fetchPokemon(document.URL.substring(30), this.props.storePokemonData);
        const orderedTypes = orderTypesByImportance(response.types, this.props.storePokemonTypes);
        updateTheme(orderedTypes, this.props.changeTheme);
    }

    renderProfile() {
        if(this.props.pokemonData) {
            return (
                <div>
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
        themeColor: state.theme.theme
    }
}

export default connect(mapStateToProps, {storePokemonData, storePokemonTypes, changeTheme})(Profile);