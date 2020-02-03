import {combineReducers} from 'redux';

import displayInfoReducer from './displayInfoReducer.js';
import pokemonDataReducer from './pokemonDataReducer.js';

export default combineReducers({
    infoShown: displayInfoReducer,
    pokemonData: pokemonDataReducer
});