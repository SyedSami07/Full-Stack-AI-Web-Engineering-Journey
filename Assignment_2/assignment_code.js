//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
  if(typeof teamAGoals !="number" || typeof teamBGoals != "number"){
    return "Invalid";
  }
  else if (teamAGoals > teamBGoals){
    return "Team A Won";
  }
  else if(teamBGoals> teamAGoals){
    return "Team B Won";
  }
  else
    return "Draw";
}

//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights){
if(Array.isArray(weights) === false){
    return "Invalid";
}
let total =0
for(let weight of weights){
    total += weight;
}

if(total <= 400){
    return true;
}
else{
    return false;
}
}

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== "number" || tokensUsed < 0){
        return "Invalid";
    }
    if(tokensUsed <= 500){
        return 0;
    }

    let extra =tokensUsed-500;
    let cost=Math.floor(extra/100)*5;
    return cost;
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    if (Array.isArray(restaurants) === false || restaurants.length === 0) {
        return "Invalid";
    }
    let best = restaurants[0];
    for (let restaurant of restaurants) {
        if (restaurant.rating > best.rating) {
            best = restaurant;
        }
    }
    return best.name.toUpperCase();
}
console.log(
    topRatedRestaurant([
        { name: "Chillox", rating: 4.5 },
        { name: "Sultan's Dine", rating: 4.8 }
    ])
);
console.log(
    topRatedRestaurant([
        { name: "KFC", rating: 4.2 },
        { name: "Pizza Hut", rating: 4.6 }
    ])
);

//Problem-05: Debugging Challenge - API Response Time Monitor
function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
        return "Invalid";
   }
   
   if (times.length === 0) {
        return "Invalid";
    }

 let total = 0;
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid";
        }
        total = total + times[i];
    }
  return total / times.length;
}