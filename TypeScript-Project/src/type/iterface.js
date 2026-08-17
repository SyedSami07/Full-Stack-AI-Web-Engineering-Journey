"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nusu = {
    name: "Nusu",
    id: 32,
    department: "Engineering",
    salary: 32000,
};
const sami = {
    name: "sami",
    id: 102,
    department: "sales",
};
const team = [nusu, sami, {
        name: 'Syed',
        id: 103,
        department: 'Video Editing'
    }];
function displayEmployeeDetails({ name, id, department }) {
    console.log(`Name: ${name}`);
    console.log(`ID: ${id}`);
    console.log(`Department: ${department}`);
}
displayEmployeeDetails(nusu);
//# sourceMappingURL=iterface.js.map