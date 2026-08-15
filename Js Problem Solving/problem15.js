// problem: return all even numbers, then their sum

let arr = [10,20,50,150,6,7,9,11,23];
// let evenNumbers = [];

// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2===0){
//     // console.log(arr[i]);
//     evenNumbers.push(arr[i]);
//     }
// }

// console.log(evenNumbers);

// let sum = 0;
// for(let key of evenNumbers){
//     console.log(key);
//     sum+=key; 
// }

// console.log(sum);


// with function

function getEvenNumbers(arr){
    let evenNumbers = [];
    for(let i=0; i<arr.length; i++){
    if(arr[i]%2===0){
    evenNumbers.push(arr[i]);
    }
}

return evenNumbers;
}


function getSum(arr){
    let sum = 0;
    for(let key of evenNumbers){
    console.log(key);
    sum+=key; 
} return sum
}

let evenNumbers = getEvenNumbers(arr);
let sum = getSum(evenNumbers);

console.log(sum);