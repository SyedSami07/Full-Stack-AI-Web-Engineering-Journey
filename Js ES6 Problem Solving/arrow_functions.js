const calculateShipping = (orderAmount, shippingFee = 60)=>{
    

    // if(orderAmount >= 1000){
    //     return "Free Shipping"
    // } else{
    //     return `Shipping Fee: ${shippingFee} Taka`
    // }
    return orderAmount >= 1000 ? "Free Shipping" : `Shipping Fee: ${shippingFee} Taka`
}

// console.log(calculateShipping(1200))
// console.log(calculateShipping(500))
// console.log(calculateShipping(500))



// problem 2: write an arrow function that assigns a grade based on marks.
const getGrade = (mark) => {

    return typeof mark!="number" ? "Invalid" : mark >= 90 ? "A+" : mark >= 80 ? "A" : mark >= 60 ? "B+" : "Fail"
};

console.log(getGrade(80))