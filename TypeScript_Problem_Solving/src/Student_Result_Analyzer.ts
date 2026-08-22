interface Student {
    name: string,
    marks: number[]
}

interface Result {
    name: string
    average: number
    result: string
}

const getStudentResult = (student: Student):Result => {
    const marks:number[] = student.marks

    const totalMarks:number = marks.reduce((sum, mark) => sum+mark, 0)
    const average:number = totalMarks / marks.length
    const result:string = average >= 40 ? "Passed" : "Failed"

    return {
        name: student.name,
        average: average,
        result: result
    }

}

console.log(getStudentResult({
    name: "Nusu",
    marks: [80,75,90,85]
}))