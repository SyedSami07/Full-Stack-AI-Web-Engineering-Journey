enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let offDay = Day.Sunday;

console.log(Day.Thursday);

enum Roles {
    Admin = 'Admina',
    Moderator = "Moderator",
    Guest = 'Guest'
}

console.log(Roles.Admin);


const sami = {
    name: "syed",
    role: Roles.Moderator,
}

console.log(sami)