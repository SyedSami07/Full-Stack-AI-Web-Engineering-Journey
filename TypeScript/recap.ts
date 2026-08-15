const destination: string = 'sylhet'
const helicopters: number = 32
const countries: string[] = ['I', 'Love', 'Nusu']


function nusu(title: string, price: number, discount?: number){
    if(discount === undefined){
        discount = 0
    }
    return `the book ${title}, costs ${price - discount}`
}


const tubeLight: {
    brand: string,
    color: string
} = {
    brand: 'nusu',
    color: 'white'
}