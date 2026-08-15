// problem: flexible total calculator
function calculateTotal(discount, ...prices){
    if(!discount){
        discount = 5
    }
    // console.log(prices)
    // let total = 0
    // for(let i = 0; i<prices.length; i++){
    //     total+=prices[i]
    // } 
    // console.log(total)

    let total = prices.reduce((accumulator, currentValue) => accumulator + currentValue ,0) 
    
    let discountAmount = (total * discount) / 100
    let totalAmount = total - discountAmount
    // console.log(totalAmount)
    return totalAmount
} 

// console.log(calculateTotal(null, 100,200,50,300))

// problem 2: merge and duplicate arrays

let arr1 = [10,20,30,40,50]
let arr2 = [50,60,20,90]

let mergedArr = [...arr1, ...arr2]
console.log(mergedArr)

// traditional way

// let newArr = []
// for(let i = 0; i < mergedArr.length; i++){
//     if(!newArr.includes(mergedArr[i])){
//         newArr.push(mergedArr[i])
//     }
// }

// shortcut way using ES6
let newArr = [...new Set(mergedArr)]
console.log(newArr)