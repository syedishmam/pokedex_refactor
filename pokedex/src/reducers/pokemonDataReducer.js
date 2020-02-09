export default (state = {data: '', speciesData: ''}, action) => {
    switch(action.type) {
        case 'STORE_POKEMON_DATA': 
            return {...state, data: action.payload[0], speciesData: action.payload[1]}

        default:
            return state
    }
}