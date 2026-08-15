const responseExtractor = (obj) => {
    const {user: {name : userName, age = 18}} = obj
    // console.log(userName, age)
    return {userName, age}
}

// console.log(responseExtractor({user: {name: "Sami", age: 25}}))


const extractor = (obj2)=> {
    const {user2: {name: userName2, age2 = 18}} = obj2
    return {userName2, age2}
}

// console.log(extractor({user2: {name: 'hello', age2 : 32 }}))


// problem 2: swap two variables and extract first/rest elements from an array using destructuring, no temp variable.
let a = 5;
let b = 10;

[b, a] = [a, b]

// console.log(a,b)

let nums = [10,20,30,40,50,60];

let [first, ...rest] = nums;
console.log(first, rest)