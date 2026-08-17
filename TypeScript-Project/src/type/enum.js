"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
let offDay = Day.Sunday;
console.log(Day.Thursday);
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admina";
    Roles["Moderator"] = "Moderator";
    Roles["Guest"] = "Guest";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
const sami = {
    name: "syed",
    role: Roles.Moderator,
};
console.log(sami);
//# sourceMappingURL=enum.js.map