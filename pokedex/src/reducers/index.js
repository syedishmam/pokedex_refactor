import {combineReducers} from 'redux';

import displayInfoReducer from './displayInfoReducer.js';
import pokemonDataReducer from './pokemonDataReducer.js';
import themeReducer from './themeReducer.js';

export default combineReducers({
    infoShown: displayInfoReducer,
    pokemonData: pokemonDataReducer,
    theme: themeReducer
});