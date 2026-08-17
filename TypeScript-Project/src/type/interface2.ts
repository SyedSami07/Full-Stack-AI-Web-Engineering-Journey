type userRole = 'Admin' | 'User' | 'Modarator' | 'Guest'

interface user{
    name: string;
    role: userRole;
    email: string;
}

interface Admin extends User {
    permissions : string[];
}

interface Modarator extends User {
    modaratedSections : string[];
}

const bigBoss: Admin = {
    name: 'Big Boss',
    role: 'Admin',
    email: 'bossSami@example.com',
    permissions: ['manage_users', 'edit_content'],
}
