function isEven(number){
    const result = number % 2
    if(number % 2 === 0){
        return true;
    }
    else{
        return false
    }
}

const result = isEven(51)
console.log('is even ', result)

