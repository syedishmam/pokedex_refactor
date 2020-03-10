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

    const pokemonTypesArray = [];
    for(let i = 0; i < types.length; i++) {
        const currentPokemonType = types[i].type.name;
        pokemonTypesArray.push(currentPokemonType.substring(0, 1).toUpperCase().concat(currentPokemonType.substring(1)));
    }

    if(pokemonTypesArray[1] === "Water" || pokemonTypesArray[1] === "Fire" || pokemonTypesArray[1] === "Grass" || pokemonTypesArray[1] === "Ground"  || pokemonTypesArray[1] === "Electric") {
        const temp = pokemonTypesArray[0];
        pokemonTypesArray[0] = pokemonTypesArray[1];
        pokemonTypesArray[1] = temp;
    }
    typesStore(pokemonTypesArray);
    return pokemonTypesArray;
}

//Updates application theme based on pokemon type
export const updateTheme = (types, changeTheme) => {
    if(types) {
        changeTheme(types[0]);
    }
}