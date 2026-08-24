const calculateWeeklyTotal = (expenses: number[]):number => {
    return expenses.reduce((sum, num) => sum+num, 0);
};

console.log(calculateWeeklyTotal([200,450,100]))