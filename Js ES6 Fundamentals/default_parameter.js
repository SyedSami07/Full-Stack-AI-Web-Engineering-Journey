function greet(name){
    return "hello, " + name;
}
// console.log(greet("Sami"));
// console.log(greet());


function makeCofee(suger){
    // console.log("making coffee with", suger, "spoons of sugar")
}

// console.log(makeCofee(2));

function calculateTotal(price, tax = 50){
    return price + tax;
}
console.log(calculateTotal(1000))


function makeCofee(sugarr = 1) {
    return `making a coffee with ${sugarr} spoons of suger`;
}

console.log(makeCofee());