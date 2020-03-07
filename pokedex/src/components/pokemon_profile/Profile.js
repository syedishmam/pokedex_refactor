import React from 'react';
import {connect} from 'react-redux';

import GenInfo from './gen_card/GenInfo.js';
import {storePokemonData} from '../../actions/index.js';
import {fetchPokemon} from '../../api/apiFunctions.js';

import './styles/Profile.css';
import DetailedInfo from './detailed_card/DetailedInfo.js';

class Profile extends React.Component {

    renderProfile() {
        if(this.props.data) {
            return (
                <div>
                    <GenInfo />
                    <DetailedInfo />
                </div>
            ) 
        } else {
            fetchPokemon(document.URL.substring(30), this.props.storePokemonData);
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

export default connect(mapStateToProps, {storePokemonData})(Profile);