// problem : check if a number is even or odd

// let number = 10;

// //without function
// if(number % 2 === 0){
//     console.log("even")
// }

// else{
//     console.log("odd")
// }


//with function

function checkEvenOrOdd(number)
{
    if(number % 2 === 0){
    return "even"
}

else{
   return "odd"
}
}

console.log(checkEvenOrOdd(24))