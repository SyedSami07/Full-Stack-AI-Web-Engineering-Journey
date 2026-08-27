// const getNames = (students) => {
//     return students.map(({name}) => name)
// }

const getNames = (students) => {
    return students.map(({age}) => age)
}


console.log(getNames([
    { name: "Nusu", age: 20 },
    { name: "Sami", age: 22 },
    { name: "SN", age: 19 }
]))