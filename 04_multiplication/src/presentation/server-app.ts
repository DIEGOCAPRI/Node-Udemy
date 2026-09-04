import { createTable } from "../domain/use-cases/create-table.use-case";
import { saveFile } from "../domain/use-cases/save-file.use-case";

interface runOptions {
    mult: number,
    limit: number,
    show: boolean,
    name: string,
    destination: string
}


export class ServerApp {

 static run({mult, limit, show, name, destination}:runOptions) {
     console.log('server running');
     const table = new createTable().execute({mult, limit});
     const createFile = new saveFile().execute({fileContent: table, 
                                                destination: `${destination}/tabla-del-${mult}`,
                                                fileName: name})

    if(show) console.log(table);
    (createFile)? console.log('wasCreated') : console.log('not created');
 }


}