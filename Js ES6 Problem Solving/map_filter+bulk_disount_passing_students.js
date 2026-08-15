let applyDiscount = (prices, discountRate = 0)=>{
    let pricesAfterDiscount = prices.map((elem, ind, arr) => {
        // console.log(ind, elem)
        const discountedPrice = elem - (elem * discountRate)/100
            return discountedPrice

    })
   return pricesAfterDiscount
}

let productPrices = [500,1000,250,400,700]
// console.log(applyDiscount(productPrices, 10))
// console.log(productPrices)

// problem 2: starts here

let getPssingStudents = (students, threshold)=>{
    let filteredStudents = students.filter(student=>{
        console.log(student)
        return student.marks >= threshold
    })
    return filteredStudents
}

let students = [
    {name: "sami", marks: 75},
    {name: "karim", marks: 40},
    {name: "utsho", marks: 60},
    {name: "suhan", marks: 59}
];

console.log(getPssingStudents(students, 60));