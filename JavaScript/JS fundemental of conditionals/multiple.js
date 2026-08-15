const salary = 24000
const isBCS = true
const hasCar = true

// if(salary <= 25000 && isBCS === true && hasCar === true){
//     console.log('meyeke biye dibo')
// }
// else{
//     console.log('meyeke biye dibo na')
// }


// if(salary <= 25000 || isBCS === true || hasCar === true){
//     console.log('meyeke biye dibo')
// }
// else{
//     console.log('meyeke biye dibo na')
// }

if( (salary > 25000 || isBCS === true) && hasCar){
    console.log('meyeke biye dibo')
}
else{
    console.log('meyeke biye dibo na')
}


