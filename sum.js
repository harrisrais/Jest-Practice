function sum(a, b){
    return a + b;
}

// function compare(a, b){
//     return (a === b);
// }

function myFunc (input){
    if (typeof input != 'number'){
        throw new Error('Invalid Input')
    }
}

function fetchData(callback){
    setTimeout(() => {
        callback('peanut butter');
    }, 1000)
}

function fetchPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('peanut butter'), 1000)
    })
}

module.exports = fetchPromise, sum, myFunc,fetchData;