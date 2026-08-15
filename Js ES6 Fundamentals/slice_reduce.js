// slicing in js

const fruits = ['apple', 'banana', 'mango', 'orange', 'grape']
const sliced = fruits.slice(1,3)
// console.log(sliced)


// reduce method

let nums = [10,20,30,40,50]

let sum = nums.reduce((accumulator, elem, ind, arr)=>{
    return accumulator+elem
}, 0)

console.log(sum)