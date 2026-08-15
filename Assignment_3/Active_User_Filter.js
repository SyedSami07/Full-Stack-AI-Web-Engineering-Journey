const filterActiveUsers = (users)=>{
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }
    
    for (let user of users) {
        if (user.isActive === undefined) {
            return "Invalid";
        }
    }
    return users.filter(user => user.isActive === true);
}

console.log(filterActiveUsers([{"name":"A","isActive":true},{"name":"B","isActive":false}]))

console.log(filterActiveUsers([]))

console.log(filterActiveUsers([{"name":"A"}]))