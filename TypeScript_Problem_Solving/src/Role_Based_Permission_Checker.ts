type Role = "admin" | "editor" | "viewer"

const canEdit = (role: Role): boolean => {
    if(role === 'admin' || role ==='editor') return true
    return false
}

console.log(canEdit("admin"))
console.log(canEdit("editor"))
console.log(canEdit("viewer"))