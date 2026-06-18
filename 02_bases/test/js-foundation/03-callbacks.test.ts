import {getUserByid} from '../../src/js-foundation/03_callbacks';


describe('callback test ',()=>{

    test('Id should be 10 and undefined', (done)=>{
       
        const id = 10;
        getUserByid(id, (err, user)=>{
            expect(err).toBe(`User not found ${id}`);
            expect(user).toBeUndefined();

            done();
        })
    })

    test('It should be 1 and John Doe', (done)=>{

        const id = 1;

        getUserByid(id, (err, user)=>{

            const name = user?.name;
            const id = user?.id;
            expect(err).toBeUndefined();
            expect(name).toBe('John Doe');
            expect(id).toBe(1);
            //también se puede hacer
            expect(user).toEqual({
                    id: 1,
                    name: "John Doe"
})

            done();
        })
    })
})