interface Usuario {
    id: number,
    name: string
}

const users: Usuario[] =[{
    id: 1,
    name: "John Doe"
}, {
    id: 2,
    name: "Juana Doe"
}]

export const getUserByid = (id: number, callback:(err?:string, user?:Usuario)=>void)=> {
      const user =  users.find(user=> user.id === id);
   
     if(!user){
    return callback(`User not found ${id}`);
   }

   return callback(undefined, user);
}
/*
function getUserByid(id, callback){
   const user =  users.find(user=> user.id === id);
   
   if(!user){
    return callback(`User not found ${id}`);
   }

   return callback(null, user);
}

getUserByid(1);
*/
