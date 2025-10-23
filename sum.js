function sum(a, b){
    return a + b;
}

// function compare(a, b){
//     return (a === b);
// }

module.exports = sum

function myFunc (input){
    if (typeof input != 'number'){
        throw new Error('Invalid Input')
    }
}

module.exports = myFunc