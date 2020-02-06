export default (state = {theme: ''}) => {
    switch(action.type) {
        case 'CHANGE_THEME':
            return {...state, theme: action.payload}

        default:
            return state
    }
}