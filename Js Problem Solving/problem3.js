// problem: find the factorial of the number N

// without function
// let number = 5;
// let result = 1;
// for(let i = 1; i<=5; i++){
//     result*=i;
// } console.log('factorial of number is: ', result)


// with function

function factorial(number){
    let result = 1;
    for(let i = 1; i<=number; i++){
        result*=i;
    }
    return result;
}

console.log("factorial of number is: ", factorial(3))