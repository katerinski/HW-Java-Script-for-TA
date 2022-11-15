// 2. 
describe('userList test', ()=> {
    const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];
    test ('"admin" user is present in the list', ()=>{
        expect(userList).toContain('admin');
    });
    test ('first user in the list is "Nick"', ()=> {
        expect(userList[0]).toBe('Nick');
    })
    test ('last user in the list is “new_user_2”', ()=> {
        expect(userList[userList.length-1]).toBe('new_user_2');
    })
    test ('user list array length is 5', ()=> {
        expect(userList.length).toBe(5);
        expect(userList).toHaveLength(5);
    })
    test ('third element of the user list has string type', ()=> {
        expect(typeof userList[2]).toBe('string');
    })
    test ('there is no eigth element in the user list', ()=> {
        expect(userList[7]).toBeUndefined;
    })
});