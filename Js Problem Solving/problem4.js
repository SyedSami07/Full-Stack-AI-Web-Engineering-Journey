// problem: loop through numbers from 1 to N, if a number is divisible by 3, print "fizz"; 
// if divisible by 5, print "buzz", if divisible by both
// , print "fizzbuzz"; otherwise print the number itself.

let number = 15;

for(let i = 1; i <= number; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    }
    else if(i % 3 === 0){
        console.log('fizz')
    }
    else if(i % 5 === 0){
        console.log('buzz')
    }
    else{
        console.log(i)
    }
}