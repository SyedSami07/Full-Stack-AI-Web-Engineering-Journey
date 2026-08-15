// problem: find the largest number in an array


// without function
// let arr = [500,100,40,60,1000, 1001]
// let largest = arr[0];

// for(let i = 1; i< arr.length; i++){
//     let currentElement = arr[i];
//     if(currentElement > largest){
//         largest = currentElement;
//     }
//     console.log("currentElement: ", currentElement)
// }

//    console.log("Largest element: ", largest)

// with function
function largestElement(arr){
    let largest = arr[0];
    for(let i = 1; i<arr.length; i++){
        let currentElement = arr[i];
        if(currentElement > largest){
            largest = currentElement;
        }
        console.log("Current Element: ", currentElement)
    }
    return largest;
}
console.log("largest Element: ", largestElement([500,100,40,60,1000, 1001]))