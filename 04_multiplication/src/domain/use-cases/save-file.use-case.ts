import fs from 'fs';

export interface safeFileUseCase {
    execute: (options: Options)=> boolean;
}

export interface Options {
    fileContent  : string,
    destination : string,
    fileName   : string
}

export class saveFile implements safeFileUseCase {

    constructor (){}

    execute({fileContent, destination , fileName }: Options): boolean {
        
        try {
            fs.mkdirSync(destination, {recursive:true});       
            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
            console.log('file created');
            return true;
        }
        catch(error){
            console.error(error);
            return false;
        }      
    }
}