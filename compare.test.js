const compare = require('./compare');
// test('adds 1 + 2 to equals 3', () => {
//     expect(sum(1, 2)).toBe(3);
// })

test('compare two strings', () => {
    expect(compare('Haris', 'Haris')).toBe(true);
})


/*matchers
> toBe is used for primitive values (numbers, strings and booleans)
> toEqual is used when comparing the values of objs or arrays
*/