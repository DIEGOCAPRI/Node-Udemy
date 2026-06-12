interface User {
    id: number,
    name: string
}

const users:User[] =[{
    id: 1,
    name: "John Doe"
}, {
    id: 2,
    name: "Juana Doe"
}]

export function getUserByid(id:number, callback:(err?:string, user?:User)=> void){
   const user =  users.find(user=> user.id === id);
   
   if(!user){
    return callback(`User not found ${id}`);
   }

   return callback(undefined, user);
}

module.exports = {
    getUserByid
}