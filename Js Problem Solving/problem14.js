const student = {
    name: "sami",
    age: 25,
    university: "NEUB",
    department: "CSE"
}

function objOperation(obj){
    for(let key in obj){
        console.log(key)
    }

    for(let key in obj){
        console.log(obj[key])
    }

    for(let key in obj){
        console.log(key, ": ", obj[key])
    }

    let objKeyCount = Object.keys(obj).length;
    console.log("total properties:" , objKeyCount);

    let hasEmailProperty = obj.hasOwnProperty("email");
    console.log(hasEmailProperty)
}




objOperation(student)