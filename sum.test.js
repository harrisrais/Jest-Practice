// const sum = require('./sum');
// test('adds 1 + 2 to equals 3', () => {
//     expect(sum(1, 2)).toBe(3);
// })

// test('compare two strings', () => {
//     expect(compare('Haris', 'Haris')).toBe(true);
// })

// test('object assignement', () => {
//     const data = {one: 1};
//      data['two'] = 2;
//      console.log("data:: ", data);
//     expect(data).toEqual({one: 1, two: 2});
// });

// test('null is falsy', () => {
//     const n = null;
//     expect(n).toBeFalsy();
// });

// const myFunc = require('./sum');
// test('throws on invalid input', () => {
//     expect(() => {
//         myFunc(2);
//         // myFunc("2");
//     }).toThrow();
// })

// const fetchData = require('./sum')
// test('the data is peanut butter', done => {
//     function callback(data) {
//         try {
//             expect(data).toBe('peanut butter');
//             done();
//         } catch (error) {
//             done(error);
//         }
//     }
//     fetchData(callback);
// });

const fetchPromise = require('./sum')

// test('the data is peanut butter', () => {
//     return expect(fetchPromise()).resolves.toBe('eanut butter');
// });

// test('the fetch fails with an Error', () => {
//     return expect(fetchPromise()).rejects.toThrow('error');
// });

test('the dtaa is peanut butter', async () => {
    const data = await fetchPromise();
    expect(data).toBe('peanut butter');
})

/* MATCHERS
> 'toBe' is used for primitive values (numbers, strings and booleans)
> 'toEqual' is used when comparing the values of objects or arrays
> 'toBeFalsy' is used to check if value is null, undefined, blank, zero, false
> 'toThrow' is used for error handling, to check if the function thows errs or not when there's an error
*/
