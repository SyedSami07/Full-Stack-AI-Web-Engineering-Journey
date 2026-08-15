// map

let numbers = [2,4,6,8,10]

// let double = []
// for(let i = 0; i<numbers.length; i++){
//     double.push(numbers[i]*2)
// }

const double = numbers.map ((elem) => elem*2 )
// console.log(double)

// foreach

let rolls = [10,12,24,30]

rolls.forEach((elem, ind, arr)=>{
    // console.log(elem, ind, arr)
})

// filter method

let prices = [100,200,300,400,500,600]
let expensiveProducts = prices.filter((elem)=>{
//     console.log(elem)
//     if(elem >= 500){
//         return true;
//     }
//     return false
return elem >= 500

 })
// console.log(expensiveProducts)


let prices2 = [100,200,300,400,500,600,1500]
let expensiveProducts2 = prices2.filter((elem) => elem >= 500)
// console.log(expensiveProducts2)


// find method

let prices3 = [100,200,300,400,700,600,500,600,1500]
let expensiveProducts3 = prices3.find((elem) => elem >= 500)
// console.log(expensiveProducts3)

// find real life example

let phones = [
{
    model: 'iphone 15',
    price: 72000
},

{
    model: 'iphone 17',
    price: 82000
},

{
    model: 'iphone 17',
    price: 92000
},

{
    model: 'iphone 18',
    price: 93000
},

{
    model: 'iphone 19',
    price: 94500
},
{
    model: 'techno',
    price: 4500
}

]
let expensivePhones = phones.filter(phones=>phones.price>=73000)
// console.log("expensive phones are: ", expensivePhones)


let cheapestPhones = phones.filter(phones => phones.price <= 50000)
// console.log("cheapest phones are: ", cheapestPhones)


// example of find method

let student = [
    {
        name: "sami",
        roll: 32
    },
     {
        name: "suhan",
        roll: 7
    }
]
const findSpecificStudent = student.find(student => student.roll === 7)

console.log(findSpecificStudent)