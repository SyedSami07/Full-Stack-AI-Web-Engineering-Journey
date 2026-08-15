// problem: filter numbers greater than a value


// without function

// let arr = [10,20,30,40,50,60,70,80,90,100];
// let value = 15;

// let filteredArray = [];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] > value){
//         filteredArray.push(arr[i])
//     }
// }

// console.log(filteredArray)



// with function
function filteredArray(arr, value){
    let filteredArray = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > value){
            filteredArray.push(arr[i]);
        }
    } 
    
    return filteredArray;
}
console.log(filteredArray([10,20,30,40,50,60,70,80,90,100], 25));