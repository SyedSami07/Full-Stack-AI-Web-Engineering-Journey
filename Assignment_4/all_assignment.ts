//Problem-01: Battery Level Status
const getBatteryStatus = (percentage: number): string => {
   if(percentage >= 0 && percentage <= 20){
        return "Low"
   } else if(percentage >= 21 && percentage <= 50){
        return "Medium"
   } else if(percentage >= 51 && percentage <= 90){
        return "High"
   } else if(percentage >= 91 && percentage <= 100){
        return "Full"
}
}


//Problem-02: Table Booking Confirmation
interface Booking {
    name: string
    guests: number
    time: number
}

const formatBookingConfirmation = (booking: Booking):string => {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
};

//Problem-03: Weekly Expense Tracker
const calculateWeeklyTotal = (expenses: number[]):number => {
    return expenses.reduce((sum, num) => sum+num, 0);
};

//Problem-04: Traffic Light Action
type Light = "red" | "yellow" | "green"

const getTrafficAction = (light: Light):string => {
    if(light === "red"){
        return "Stop"
    } else if(light === "yellow"){
        return "Slow Down"
    }
    return "Go"
};

//Problem-05: Quiz Score Summary
interface total {
    total: number
    average: number
}
const getQuizSummary = (scores: number[]): total => {
    if (scores.length === 0) {
        return { total: 0, average: 0 };
    }
    const total:number = scores.reduce((sum, total) => sum+total,0)
    const average:number = total / scores.length 

    return {total, average}
};

