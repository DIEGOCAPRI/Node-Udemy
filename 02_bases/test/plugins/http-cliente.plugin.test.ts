import {httpClient} from '../../src/plugins/http-client';

describe('Test http-client axios', ()=>{
    test('http-client must return string', async ()=> {

        const data = await httpClient.get('https://jsonplaceholder.typicode.com/todos/1');

        expect(data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": expect.any(Boolean)
        })
    
    })
})