
/*const {emailTemplate} = require('./js-foundation/01_template');
require('./js-foundation/02_destructuring');

const templateExports = require('./js-foundation/01_template.js');

///aca va a salir emailTemplate + lo que contiene emailTemplate
console.log(templateExports);

//acá solo va lo que contiene emailTemplate
console.log(templateExports.emailTemplate);


const getUserByid = require('./js-foundation/04_arrows');

const id = 1;

getUserByid(id, (error, user)=>{
    if(error) throw new Error(error);
    
    console.log(user);
})

console.log(emailTemplate);

console.log("Hola mundo desde app.js");


Factory function e inyección de dependencias
const { getUuidv, getAge } = require('./plugins');

const {makePerson} = require('./js-foundation/05_factory');

const newPerson = makePerson({getUuidv,getAge});
const obj = {name: 'John', birthdate:'1985-10-21'};

const persona = newPerson(obj);

console.log(persona);

*/

///promesas
///const getPokemonById = require('./js-foundation/06-promises');


/*
getPokemonById(4)
   .then((pokemon) => console.log({pokemon}))
   .catch((err) => console.error('Por favor intente nuevamente'))
   .finally(()=> console.log('Finalizado'))
   */

/*winston logger
const {buildLogger} = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hola Mundo');
logger.error('Esto es un error');

TS
*/

///import { buildLogger } from "./plugins/logger.plugin";

///const logger = buildLogger('app.js');

///logger.log('Hola mundo');