import { httpClient } from "../plugins/http-client";

///const {httpClient} = require('../plugins');

export const getPokemonById = async (id: number|string):Promise<string> => {
   
   try {
   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
   const pokemon = await httpClient.get(url);
    /* lo reemplazo por http-client
    const resp = await fetch(url);
    const pokemon = await resp.json();
    */

    return pokemon.name;
   }
   catch(error){

    throw  `Pokemon not found whit id ${id}`
    
   }
    /*
    return fetch(url)
        .then((response)=> response.json())
        .then((pokemon) => pokemon.name)
    */
}
