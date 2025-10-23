// const sum = require('./sum');
// test('adds 1 + 2 to equals 3', () => {
//     expect(sum(1, 2)).toBe(3);
// })

// test('compare two strings', () => {
//     expect(compare('Haris', 'Haris')).toBe(true);
// })

test('object assignement', () => {
    const data = {one: 1};
     data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
})



/*matchers
> toBe is used for primitive values (numbers, strings and booleans)
> toEqual is used when comparing the values of objects or arrays
*/