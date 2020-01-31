export default (state = {infoShown: 'about'}, action) => {
    switch(action.type) {
        case 'DISPLAY_ABOUT':
            return {...state, infoShown: action.payload}

        case 'DISPLAY_BASE_STATS':
            return {...state, infoShown: action.payload}

        default:
            return state    
    }
}