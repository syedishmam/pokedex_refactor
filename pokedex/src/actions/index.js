/* --- Pokemon Profile Actions --- */

/* Pokemon Profile Info Tabs */

export const displayTab = (type) => {
    return {
        type: 'DISPLAY_TAB',
        payload: type
    }
}

/* --- Search Actions --- */

export const storePokemonData = (data, speciesData) => {
    return {
        type: 'STORE_POKEMON_DATA',
        payload: [data, speciesData]
    }
}

export const storePokemonDescEnglish = (desc) => {
    return {
        type: 'STORE_POKEMON_DESC',
        payload: desc
    }
}

export const storePokemonTypes = (types) => {
    return {
        type: 'STORE_POKEMON_TYPES',
        payload: types
    }
}

/* -- Theme Actions -- */

export const changeTheme = (theme) => {
    return {
        type: 'CHANGE_THEME',
        payload: theme
    }
}

/* --- Stats --- */

export const storeStats = (stats) => {
    return {
        type: 'STORE_STATS',
        payload: stats
    }
}