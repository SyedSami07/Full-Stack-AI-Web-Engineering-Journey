// 1. Greeting
// Function: greet("nusu")
// Output: Hello, nusu!
// Use: arrow function + template literal
const greet = (name) => {
    return `hello, ${name}!`
}
// console.log(greet("nusu"))


// 2. Default Parameter
// function: makeCoffee()
// Output: Making coffee with 1 spoon of sugar.
const makeCoffee = (sugar = 1) => {
    return `Making coffee with ${sugar} spoon of sugar`
}
// console.log(makeCoffee(3))


// 3. Check Even
// isEven(10)
// Output: true
const isEven = (number) => {
    return number % 2 === 0 ? true : false;
}
// console.log(isEven(7))


// 4. Full Name
// getFullName("Sami", "Nusu")
// Output: Sami Nusu

function getFullName (jamai, bou){
    return `${jamai}, ${bou}`
}
console.log(getFullName("Sami", "Nusu"))