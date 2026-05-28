const axios = require("axios");

const httpClient = {
    get : async(url)=> {
        try{
           const response = await axios.get(url);
           const data =   response.data;
           return  data;
        }
        catch (error) {
            console.log(error);
        }
        


        /*lo reemplazo con axios
        const response = await fetch(url);
        return await response.json();
        */       
    },
};


module.exports ={
    httpClient,
}