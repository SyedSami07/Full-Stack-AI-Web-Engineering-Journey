function calculateTax (amount: number | string, taxRate: number): number{

   if(typeof amount === 'string'){
    amount = parseFloat(amount);
   }
    return amount * taxRate;
}

const myTax = calculateTax(100,0.15)

const yourTax = calculateTax('200', 0.2)
console.log(myTax)


// null
const myFuture: number | null = null

// any
const myVariable: any = 'Hello'


// undefined

let myMoney: undefined | number

myMoney = 25
myMoney = undefined

