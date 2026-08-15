interface Employee {
    name: string;
    id: number;
    department: string;
    salary?: number;
}

const nusu: Employee = {
    name: "Nusu",
    id: 32,
    department: "Engineering",
    salary: 32000,
}

const sami: Employee = {
    name: "sami",
    id: 102,
    department: "sales", 
}

const team: Employee[] = [nusu, sami, {
    name: 'Syed',
    id: 103,
    department: 'Video Editing'
}]


function displayEmployeeDetails({name, id, department}: Employee): void{
    console.log(`Name: ${name}`)
    console.log(`ID: ${id}`)
    console.log(`Department: ${department}`)
}

displayEmployeeDetails(nusu)