const getAdults = (numbers) => {
    return numbers.filter(number => number > 15)
}

console.log(getAdults([12, 18, 15, 25, 30]))