import { yarg } from "./config/plugins/yargs.plugins";
import { ServerApp } from "./presentation/server-app";


(async ()=> {
   await main();
})()

async function main (){

   const {b:mult , l:limit, s:show, n: name, d: destination} = yarg;
   
   ServerApp.run({mult, limit, show, name, destination});
}