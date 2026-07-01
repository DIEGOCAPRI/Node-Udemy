import {getPokemonById} from  '../../src/js-foundation/06-promises';


describe('js-foundation promises',()=>{
    
    test('getPokemonById should return a Pokemon', async()=>{

        const pokemon = await getPokemonById(1);

        expect(pokemon).toBe('bulbasaur');

            }
        )
    
    test('should return an error if Pokemon doesnt exists', async()=>{

        const pokemonId = 1111111111111
        try {
            await getPokemonById(1111111111111);
            expect(true).toBeFalsy();
        }
        catch(error){
            expect(error).toBe(`Pokemon not found whit id ${pokemonId}`)
        }
    })
})