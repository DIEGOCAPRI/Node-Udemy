
describe('Test in the app',()=>{
    test('shouldbe true',()=> {

        //arrange
        const num1= 10;
        const num2= 20;

        //act
        const resultado = num1 + num2;


        //assert
        expect(resultado).toBe(30);
    });
})

