function isElevatorSafe(weights){
    let sum = 0;
    for(let i=0; i <weights.length; i++){
        sum+=weights[i]
    } return sum;
}

console.log(isElevatorSafe([60,75,50]))