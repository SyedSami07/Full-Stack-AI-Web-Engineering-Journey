const calculateTotal = (number) => {
    return number.reduce((sum, items) => sum+items, 0)
}

console.log(calculateTotal([100, 200, 50]))