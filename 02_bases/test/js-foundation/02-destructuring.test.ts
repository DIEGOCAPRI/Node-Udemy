

import {characters} from  '../../src/js-foundation/02_destructuring';


describe('js-foundation/02_destructuring', ()=> {

     test('characters should contain flash y superman', ()=>{
       
        expect(characters).toContain('Superman');
        expect(characters).toContain('Flash');

     })

})