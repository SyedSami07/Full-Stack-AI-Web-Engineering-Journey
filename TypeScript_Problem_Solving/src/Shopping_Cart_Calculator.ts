type product = {
    name: string
    price: number
}


const calculateCartTotal = (products:product[]): number => {

    const total:number = products.reduce((sum, item) => sum + item.price, 0)
    return total
}

console.log(calculateCartTotal([
    {name: "keyboard", price: 32},
    {name: "mouse", price: 7}
]))