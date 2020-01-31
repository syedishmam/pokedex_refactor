import {combineReducers} from 'redux';

import displayInfoReducer from './displayInfoReducer.js';

export default combineReducers({
    infoShown: displayInfoReducer
});