// // spread operator

// let number = [10,20,30,40,50,2000]

// // console.log(...number)


// let maxNumber = Math.max(...number)


// let students = {
//     name: "sami",
//     age: 25
// }

// let students2 = {...students, gap: "5.00"}
// students.something = "samia"
// // console.log(students2)



// // console.log(students)

// // console.log(maxNumber)


// let numbers2 = [...number,5000,24,5]

// number.push(2599)

// // console.log(numbers2 )



// // rest operator

// // function sum(a,b,c,...restNumbers){
// //     let sum = 0;
// //     for(let numbers of restNumbers){
// //         sum+=numbers;
// //     }
// //     return a+b+c+sum;
// // }

// // console.log(sum(10,20,30,40))



// function sum(a,b,c,...rest){
//     let sum = 0
//     for(let number of rest){
//         sum+=number
//     }
//     return a+b+c+sum;
// }
// console.log(sum(10,20,30,40))



// spread

let number = [10,20,30,40,50]
let number2 = {...number}
number2.push(2500)

console.log(number)