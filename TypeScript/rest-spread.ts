const device = {
    name: 'iPhone',
    type: 'smartphone',
    price: 999,
    color: 'black',
    storage: '128GB'
};

const {name: deviceName, ...deviceInfo} = device;

const numbers: number[] = [1,2,3,4,5,6]

const allNumbers: number[] = [...numbers]

allNumbers.push(7)

console.log(allNumbers)

console.log(numbers)