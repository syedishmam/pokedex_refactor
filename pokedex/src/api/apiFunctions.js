import pokeApi from './pokeApi.js';

//Fetch pokemon from API
export const fetchPokemon = async (pokemon, dataStore) => {
    const response = await pokeApi.get('pokemon/' + pokemon);
    const speciesData = await pokeApi.get('pokemon-species/' + response.data.id);
    dataStore(response.data, speciesData.data);
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

export function capitalizeFirstChar(pokemon) {
    const capitalize = pokemon.substring(0, 1).toUpperCase().concat(pokemon.substring(1));
    return capitalize;
}

//Export english flavor text from array of descriptions in numerous languages
export function getEnglishPokemonDescription(descs, storeDesc) {
        const englishDesc = descs.find(desc => desc.language.name === 'en');
        storeDesc(englishDesc.flavor_text);
        return englishDesc.flavor_text;
}