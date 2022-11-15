//1.
const addition = require('../addition');
describe('Addition test', ()=> {
    test ('0.1 plus 0.2 is 0.3', ()=> {
        expect(addition(0.1, 0.2)).toBeCloseTo(0.3);
    });
});

