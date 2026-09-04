export interface createTableUseCase {
    execute:(option:createTableOption)=>string;
}

export interface createTableOption {
    mult:number;
    limit?: number;
}


export class createTable implements createTableUseCase{

    constructor(){

    }

    execute({mult, limit = 10}:createTableOption){

        let outPutMessage = '';

        for (let i = 1 ; i <= limit ; i++) {
                outPutMessage += `${mult} x ${i} = ${mult * i}\n `;
            }
        return outPutMessage;
    }
}