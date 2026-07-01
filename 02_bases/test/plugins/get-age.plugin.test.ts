import {getAge} from '../../src/plugins/get-age-plugin';

describe('Test age plugin',()=> {

    test('getAge should return a number', ()=>{

        const birthdate = '1984-10-05';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');

    })

    test('getAge should return current age of a person', ()=>{

        const birthdate= '1984-10-05';
        const age = getAge(birthdate);
        const currentAge= new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(currentAge);
    })

})