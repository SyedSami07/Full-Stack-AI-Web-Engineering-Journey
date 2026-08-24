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
