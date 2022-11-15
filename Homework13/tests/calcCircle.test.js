//3.
const getCircleArea = require('../calcCircle');
const getCircleLength = require('../calcCircle');

describe('Testing circles', ()=> {
    test.each([[22, 138.2]])('circle length with radius %i is %i', (radius, result)=> {
        expect(getCircleLength(radius).toFixed(1)).toBe(result);   
    })
    test.each([[9, 254.47]])('circle area with radius %i is %i', (radius, result)=> {
        expect(getCircleArea(radius)).toBeCloseTo(result);
    })
    test ('circle area without arguments', ()=> {           
        expect(getCircleArea()).toBeCalled();
    })
    test ('circle length without arguments', ()=> {        
        expect(getCircleLength()).toBeCalled();
    })
})