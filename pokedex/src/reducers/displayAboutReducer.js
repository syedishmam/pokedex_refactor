export default (state = {displayAbout: false}, action) => {
    switch(action.type) {
        case 'DISPLAY_ABOUT':
            return {...state, displayAbout: action.payload}

        default:
            return state    
    }
}