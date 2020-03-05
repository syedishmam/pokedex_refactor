import React from 'react';
import {connect} from 'react-redux';

import GenInfo from './gen_card/GenInfo.js';
import pokeApi from '../../api/pokeApi.js'
import {storePokemonData, changeTheme} from '../../actions/index.js'

import './styles/Profile.css';
import DetailedInfo from './detailed_card/DetailedInfo.js';

class Profile extends React.Component {

    fetchPokemonIfNoData = async (pokemon) => {
        const response = await pokeApi.get('pokemon/' + pokemon);
        this.props.storePokemonData(response.data);
        console.log(response.data)
    }

    renderProfile() {
        if(this.props.data) {
            return (
                <div>
                    <GenInfo />
                    <DetailedInfo />
                </div>
            ) 
        } else {
            this.fetchPokemonIfNoData(document.URL.substring(30));
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
        data: state.pokemonData.data
    }
}

export default connect(mapStateToProps, {storePokemonData, changeTheme})(Profile);