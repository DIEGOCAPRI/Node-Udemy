import * as fs from 'fs';
import { yarg } from './config/plugins/yargs.plugins';



let outPutMessage = '';

const {b, s, l} =  yarg;


const header =  `
=====================================
      Tabla del ${b}
=====================================      
`;

for (let i = 1 ; i <= l ; i++) {
    outPutMessage += `${b} x ${i} = ${b * i}\n `;
}

outPutMessage += `${header}\n ${outPutMessage}`;


if(s){
console.log(outPutMessage);
}
///escribir en u archivo

const outPath = 'outputs';

fs.mkdirSync(outPath, {recursive:true});

fs.writeFileSync(`outputs/tabla-${b}.txt`, outPutMessage);