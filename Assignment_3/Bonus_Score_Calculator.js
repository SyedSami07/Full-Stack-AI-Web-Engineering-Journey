const bonusScore = (scores) => {
    if (!Array.isArray(scores) || scores.length === 0) return "Invalid";

     for (let score of scores) {
        if (typeof score !== "number") return "Invalid";
    }

    const updatedScores = scores.map(score => score + 10);
    return updatedScores.reduce((totalScore, score) => totalScore + score, 0);
};

console.log(bonusScore([7]))
console.log(bonusScore([80,65,90,75]))

console.log(bonusScore("scores"))
