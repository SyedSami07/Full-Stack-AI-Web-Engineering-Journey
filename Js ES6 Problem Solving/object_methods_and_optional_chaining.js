const getMostExpensiveProduct = (product)=> {
    const keys = Object.keys(product)
   let highest = 0;
   let expensiveProductName = '';
    for (let key of keys) {
        if(highest < product[key]){
            highest = product[key]
            expensiveProductName = key
        }
    }
    // console.log(highest, expensiveProductName)
}

// 

// problem 2 

let user1 = {
    name: "sami",
    // address: {
    //     city: "Sylhet",
    // },
};

const getCity = (user1) => {
    return user1.address?.city;
}

console.log(getCity(user1))