const {httpClient} = require('../plugins');

export const getPokemonById = async (id: number|string):Promise<string> => {
   
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
   
   const pokemon = await httpClient.get(url);
    /* lo reemplazo por http-client
    const resp = await fetch(url);
    const pokemon = await resp.json();
    */

    return pokemon.name;
    /*
    return fetch(url)
        .then((response)=> response.json())
        .then((pokemon) => pokemon.name)
    */
}
