

const makePerson = ({getUuidv,getAge })=> {

    return ({name, birthdate}) => {

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

module.exports = {
    makePerson,
}