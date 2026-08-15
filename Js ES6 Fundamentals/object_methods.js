// const user = {
//     name: "sami",
//     age: 25,
//     id: 4995
// }

// const keys = Object.keys(user)
// const values = Object.values(user)
// const entries = Object.entries(user)

// console.log(entries)

// console.log(keys, values)

// for(let elem of keys){
// //     console.log(elem, user[elem])
// //
// }

// for (let element of entries) {
//     const [key, value] = element
//     console.log(key, value)
// }

// delete user.age
// console.log(user)


// const bankAccount = {
//     accountNumber: '1234',
//     balance: 5000
// }

// Object.seal(bankAccount)

// delete bankAccount.accountNumber
// console.log(bankAccount)


const birthCertificate = {
    name: "sami",
    birthDate: "2/12/200",
    cerNumber: "5345345"
}

Object.freeze(birthCertificate)
delete birthCertificate.name
console.log(birthCertificate)