export default (state = {infoShown: 'about'}, action) => {
    switch(action.type) {
        case 'DISPLAY_TAB':
            return {...state, infoShown: action.payload}

        default:
            return state    
    }
}