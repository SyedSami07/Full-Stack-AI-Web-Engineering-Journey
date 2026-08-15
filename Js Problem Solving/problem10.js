// find the smallest number in an array

// with function

function findSmallestElement(arr){
let smallest = arr[0];
    for(let i = 0; i<arr.length; i++){
        let currentElement = arr[i];
        if(currentElement < smallest){
            smallest = currentElement;
        }
       console.log("Array is: ", currentElement)
    } return smallest;
}

console.log("Smallest Element is: ",findSmallestElement([6,33,234,677,800]))