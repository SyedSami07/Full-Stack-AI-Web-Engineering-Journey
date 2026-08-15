const student = {
    name: "sami",
    id: 7,
    favSubject: ['dsa' , 'machine learning', 'math']
}

for(const key in student){
    const value = student[key]
    console.log(key, value)
}