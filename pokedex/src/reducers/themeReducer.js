export default (state = {theme: ''}, action) => {
    switch(action.payload) {
        case 'water':
            return {...state, theme: '#add8e6'}

        default:
            return state
    }
}