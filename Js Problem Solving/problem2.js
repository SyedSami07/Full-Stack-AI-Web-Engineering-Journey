// problem: sum of a range of numbers ( 1 to N)


//without function

// let number = 7;
// let sum = 0;
// for(let i = 1; i<=number; i++){
//    sum+=i
// }
// console.log(sum)


//with function

function sumOfRangeNumbers(sum, number){
    for(let i = 1; i<=number; i++){
    sum+=i;
} return sum;
}

console.log("sum of a range of no: ", sumOfRangeNumbers(0, 7))