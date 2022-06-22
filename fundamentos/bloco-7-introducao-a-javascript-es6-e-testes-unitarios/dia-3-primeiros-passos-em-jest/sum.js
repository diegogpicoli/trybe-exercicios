const { number } = require("yargs");

const sum = (a, b) => {

    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('parameters must be numbers')
    }

    return a + b;
}

const array = [1, 2, 3, 4, 5, 2]

const myRemove = (arr, item) => {

    for (let index = 0; index < arr.length; index += 1) {
        if (arr[index] === item){
            arr.splice(index, 1)
        }
    }
    return arr
}

console.log(myRemove([1, 2, 3, 4], 3))


const myFizzBuzz = (num) => {

    if (typeof num !== 'number'){
        return false
    } else if (num % 3 === 0 && num % 5 === 0){
        return 'fizzbuzz'
    } else if (num % 3 === 0){
        return 'fizz'
    } else if (num % 5 === 0){
        return 'buzz'
    } else if (num % 3 !== 0 && num % 5 !== 0){
        return num
    } 

}

console.log(typeof(1))



module.exports = { sum, myRemove, myFizzBuzz };