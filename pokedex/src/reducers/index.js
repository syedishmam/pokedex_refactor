import {combineReducers} from 'redux';

import displayAboutReducer from './displayAboutReducer.js';

export default combineReducers({
    about: displayAboutReducer
});