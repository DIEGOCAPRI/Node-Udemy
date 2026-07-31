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

    test('getAge should return 0 years', ()=>{

        ///aca Date es el obeto y getFullYear el métdo de ese objeto
        ///mockReturnValue es el valor que simulo devolver. Valor de pruebas
        const spy = jest.spyOn(Date.prototype,'getFullYear').mockReturnValue(1995);

        const birthdate = '1995-03-04';
        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled();
        ///El spy hace que getFullYear devuelva siempre 1995 como año actual por lo cual la edad da 0
        /// toHaveBeenCalled confirma que el spy se haya llamado
    })

})