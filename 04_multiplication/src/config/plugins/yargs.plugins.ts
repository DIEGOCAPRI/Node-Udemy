import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';


/*
b es el argumento que recibe y después va el objeto con sus características
demandOption =>es obligatorio que lo pase
*/
export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'mult',
        type: 'number',
        demandOption : true,
        describe: 'multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'multiplication table limit'
    })
    .option('s',{
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'show table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        description: 'table name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        description: 'destination file'
    })
    .check((args, options)=> {
        if (args.b < 1) throw "La base de multipliación debe ser mayor a cero";

        return true;
    })
    .parseSync()