// problem: sum and average of an array


// without function

// let arr = [1,2,5,10]


// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     sum+=arr[i];
// }

// console.log(sum);

// let avg = sum/arr.length;
// console.log(avg)


// with function
function generateAverge(arr){
   let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum+=arr[i];
}
let avg = sum/arr.length;
return avg
}
console.log("average: ", generateAverge([1,2,5,10]))