const {add} = require('./math')

describe('Math module', () => {
    test('add function', () => {
        expect(add(3, 4)).toEqual(7)
    })
})

// describe('Math module', () => {
//     test('add function', () => {
//         expect(add(3, 4)).toBe(7);
//     });
// });