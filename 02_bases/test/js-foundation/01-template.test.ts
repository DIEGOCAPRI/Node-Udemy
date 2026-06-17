import {emailTemplate} from "../../src/js-foundation/01_template";


describe('Template 01 test', ()=> {

    test('email template debe contener un mensaje', ()=>{

       expect(emailTemplate).toContain('Hola');
    });


}) 