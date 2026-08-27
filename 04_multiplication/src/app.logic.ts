import * as fs from 'fs';

let outPutMessage = '';

const mult = 5;
const header =  `
=====================================
      Tabla del ${mult}
=====================================      
`;

for (let i = 1 ; i <= 10 ; i++) {
    outPutMessage += `${mult} x ${i} = ${mult * i}\n `;
}

outPutMessage += `${header}\n ${outPutMessage}`;

console.log(outPutMessage);

///escribir en u archivo

const outPath = 'outputs';

fs.mkdirSync(outPath, {recursive:true});

fs.writeFileSync(`outputs/tabla-${mult}.txt`, outPutMessage);