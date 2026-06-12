interface Options { 
   getUuidv : ()=> string;
   getAge: (birthdate:string) => number;
}

interface personOptions {
    name: string;
    birthdate: string;
}

export const makePerson = ({getUuidv,getAge } : Options)=> {

    return ({name, birthdate} :personOptions) => {

    return {
        id: getUuidv(),
        name: name,
        birthdate: birthdate,
        years: getAge(birthdate)
    }
}
}


/*
const obj = {
    name: "Diego",
    birthdate: "1984-10-05"
}

const newPerson = buildPerson(obj);

console.log(newPerson);
*/
