import pokeApi from './pokeApi.js';

//Fetch pokemon from API
export const fetchPokemon = async (pokemon, dataStore) => {
    const response = await pokeApi.get('pokemon/' + pokemon);
    const speciesData = await pokeApi.get('pokemon-species/' + response.data.id);
    dataStore(response.data, speciesData.data);
    console.log(response.data);
    return response.data;
}

//Rearrange array for main types to be displayed first and to have theme color reflect accordingly
//Stores types array in redux store
export const orderTypesByImportance = (types, typesStore) => {
    if(types[1] === "Water" || types[1] === "Fire" || types[1] === "Grass" || types[1] === "Ground"  || types[1] === "Electric") {
        const temp = types[0];
        types[0] = types[1];
        types[1] = temp;
    }
    typesStore(types);
    return types;
}

//Updates application theme based on pokemon type
export const updateTheme = (types, changeTheme) => {
    console.log(types[0].type.name);
    if(types) {
        changeTheme(types[1].type.name);
    }
}