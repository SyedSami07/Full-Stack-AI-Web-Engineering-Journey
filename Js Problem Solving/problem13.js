// problem: loop through an objects properties

let monitor = {
    color: 'black',
    brand: 'lg',
    display: 'something',
    size: 'something'
}
// for in loop
// for (let key in monitor) {
//    console.log(key, ":", monitor[key]);
// }



// using keys method

let objKeys = Object.keys(monitor)

// for(let i = 0; i<objKeys.length; i++){
//     let key = objKeys[i];
//     console.log(key, ":", monitor[key]);
// }

for (let key of objKeys){
    console.log(key, ":", monitor[key]);
}