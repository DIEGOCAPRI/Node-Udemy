import { getUuidv } from '../../src/plugins';


describe('get-id-plugin UUid', ()=>{

    test('getUuid should return a uuid', ()=>{

        const uuid = getUuidv();

        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);

    })
})