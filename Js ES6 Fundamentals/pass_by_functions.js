// pass by value | kono kisu change korle actual data change hoyna

let name = "sami"
let age = 25

function myFunc (myName, myAge){
    myName = "syed sami"
    myAge = 32
    console.log(myName, myAge)
}
myFunc(name, age)
console.log(name, age)


// pass by reference | kono kisu change korle actual data  o change hoy.


function changeObj(obj){
    obj.name = "nothing"
}

// let person = { name : "sami"}
// changeObj(person)
// console.log(person.name)


// pass by reference | kono kisu change korle actual data5 o change hoy.
let student = {
    name: "sami",
    roll: 7
}
function myFunc2(data){
    // data.name= "syed sami"
    data = {name: "syed sami", roll: 32}
    console.log(data)
}
myFunc2(student)
console.log(student)




// mutate
function edit(obj){
    obj.name = "changed"
    console.log(obj)    
}

let p = {name: "suhan"}
edit(p)

// reassign

function replace(obj){
    obj = {name: "new"}
   console.log(obj)
}
let q = {name: "suhan"}
replace(q) 

const person = {
    name: "Sami"
};

person.name = "suhan";

console.log(person);