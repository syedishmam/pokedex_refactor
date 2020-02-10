export default (state = {data: '', speciesData: '', pokemonDesc : ''}, action) => {
    switch(action.type) {
        case 'STORE_POKEMON_DATA': 
            return {...state, data: action.payload[0], speciesData: action.payload[1]}

        case 'STORE_POKEMON_DESC':
            return {...state, pokemonDesc: action.payload}

        default:
            return state
    }
}