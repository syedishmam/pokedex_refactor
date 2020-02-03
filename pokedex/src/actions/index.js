/* --- Pokemon Profile Actions --- */

/* Pokemon Profile Info Tabs */

export const displayAbout = (type) => {
    return {
        type: 'DISPLAY_ABOUT',
        payload: type
    }
}

export const displayBaseStats = (type) => {
    return {
        type: 'DISPLAY_BASE_STATS',
        payload: type
    }
}

export const displayEvolution = (type) => {
    return {
        type: 'DISPLAY_EVOLUTION',
        payload: type
    }
}

export const displayMoves = (type) => {
    return {
        type: 'DISPLAY_MOVES',
        payload: type
    }
}

/* --- Search Actions --- */

export const storePokemonData = (data) => {
    return {
        type: 'STORE_POKEMON_DATA',
        payload: data
    }
}