const users =[{
    id: 1,
    name: "John Doe"
}, {
    id: 2,
    name: "Juana Doe"
}]

function getUserByid(id, callback){
   const user =  users.find(user=> user.id === id);
   
   if(!user){
    return callback(`User not found ${id}`);
   }

   return callback(null, user);
}

getUserByid(1);

module.exports = {
    getUserByid
}