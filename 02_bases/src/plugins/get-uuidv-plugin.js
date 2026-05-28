const { v4: uuidv4 } = require('uuid');


const getUuidv = () => {

    return uuidv4();
}

module.exports = {
    getUuidv,
}