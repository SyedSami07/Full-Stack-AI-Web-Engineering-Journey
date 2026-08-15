// kono ekta inner funcion (nested) outer scope theke access kortese, that is closure.
// ei jinisher name hocche : lexical scope, and behavior hocche closure.

function createCounter(){
    let counter = 0
    return function(){
        counter++
        return counter
    }
}

let counter = createCounter()
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

// real life example: ekta function diye different business er kaj korte partesi

function cashRegister(){
    let amount = 0;
    return function(payableAmount){
        amount+=payableAmount
        return amount;
    }
}

let coffeeShopCashCounter = cashRegister()
let restaurantCashCounter = cashRegister()
let juiceBarCashCounter = cashRegister()

console.log(coffeeShopCashCounter(200))
console.log(coffeeShopCashCounter(100))
console.log(coffeeShopCashCounter(500))
console.log(restaurantCashCounter(50))

console.log(coffeeShopCashCounter(100))

console.log(juiceBarCashCounter(32))
console.log(juiceBarCashCounter(7))

console.log(coffeeShopCashCounter(100))

// Ekekta business independently cashRegister function ke access kore kaj chalate parbe.
// kono function ekta arektar sathe conflict korbe na.
