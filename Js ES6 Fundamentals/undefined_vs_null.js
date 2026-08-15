// undefined
let x
// console.log(x)


// null
let y = null
// console.log(y)


// undefined
function greet(name){
    // console.log(name)
}
greet()


// undefined
const obj = {
    age: 25
}
// console.log(obj.city)

// falsy value

if(false){
    console.log("false")
}


if(0){
    console.log(0)
} else{
    console.log("0 is a falsy value")
}

if(""){
    console.log("")
}

if(null){
    console.log(null)
}

if(undefined){
    console.log(undefined)
} 


if(NaN){
    console.log("Not a Number")
}

// truthy value

if("hello"){
    console.log("truthy")
}
