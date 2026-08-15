// syntax fix:::

let status = "order placed"

for(let i = 1; i <= 3; i++){
    status = "Processing Item " + i
    // console.log(status)
}

// console.log("Final Status: " , status)



// problem 2: receipt generator (template strings)

function receiptGenerator(name, price, qty){
    // return name + " x" + qty + " = " + price*qty + " Taka"
    return `${name} x${qty} = ${price*qty} Taka`

}
console.log(receiptGenerator("Pen", 20, 3))
