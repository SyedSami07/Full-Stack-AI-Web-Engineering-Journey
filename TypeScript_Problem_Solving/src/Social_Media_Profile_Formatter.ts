// type User = {
//     name: string,
//     age: number,
//     city: string
// }

interface User {
    name: string
    age:  number
    city: string
    gender: string
}


const formatUserPrifle = (user: User): string => {
    return `${user.name} is ${user.age} years old ${user.gender} and lives in ${user.city}`
}

console.log(formatUserPrifle({
    name: "Nusu",
    age:  25,
    city: "Sylhet",
    gender: "Beutiful Women"
}))