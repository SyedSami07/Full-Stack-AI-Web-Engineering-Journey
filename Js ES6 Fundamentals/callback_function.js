function registerStudent(cb){
    console.log("user is registering. need more data!")
    cb()
}


function userBasicInfo(){
    let student = {
        name: "sami",
        age: 25,
        roll: 7
    } 
    // console.log(student)

}


function pastAcademicInfo(){
    let academicInfo = {
        ssc: "5.00",
        hsc: "5.00"
    } 
    // console.log(academicInfo)
}

// console.log(registerStudent(userBasicInfo))
// console.log(registerStudent(pastAcademicInfo))


function calculator(a,b, cb){
    let sum = a+b
    cb(sum)
}

function displayResult(result){
    // console.log(result)
}


calculator(5,5, displayResult)
calculator(5,50, displayResult)



// real life call back use

function pizzaReady(callback){
    // console.log("Pizza is Ready")
    callback()
}

function notifyCustomer(){
    // console.log("hello sir, your pizza is ready")
}

pizzaReady(notifyCustomer)


// example 2
function greet(name){
    console.log("Hello " + name)
}

function processUser(callback){
    let user = "sami"
    callback(user)
}
processUser(greet)



// example 3

function add(a,b){
    return a+b
}

function calculate(a,b,operation){
    return operation(a,b)
}
console.log(calculate(10,20,add))