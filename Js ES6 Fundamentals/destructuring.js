const numbers = [10,20,30,40,50]

const [ten, twenty, , , fifty] = numbers

// console.log(ten, twenty, fifty)


const student = {
    name: 'sami',
    roll: 7,
    age: 25,
    marks: {
        DSA: 98,
        DL: 97,
        ML: 95
    }
}

const {age, name:helo, marks: {DSA}} = student
// const marks_target = student.marks.DL

console.log(age, helo, DSA)
