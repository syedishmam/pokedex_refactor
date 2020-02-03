export default (state = {data: ''}, action) => {
    switch(action.type) {
        case 'STORE_POKEMON_DATA': 
            return {...state, data: action.payload}

        default:
            return state
    }
}