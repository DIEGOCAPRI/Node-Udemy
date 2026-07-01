import {makePerson} from '../../src/js-foundation/05_factory.ts';

describe('js-foundation-factory',()=>{

    //como no me interesa ver si la edad y el id son correctos sino devolver la function

    const getUuidv = ()=>'1234';
    const getAge = ()=>35;

    test('makePerson should return a function', ()=>{
        
        const buildPerson = makePerson({getUuidv, getAge})

        expect(typeof buildPerson).toBe('function');
    })

    test('makePerson should return a person',()=>{
        
        const buildPerson = makePerson({getUuidv, getAge});
        const diego = buildPerson({name:'Diego',birthdate:'05/10/1984'});

        expect(diego).toEqual({
            id: '1234',
            name:'Diego',
            birthdate: '05/10/1984',
            years: 35
        })
    })
})