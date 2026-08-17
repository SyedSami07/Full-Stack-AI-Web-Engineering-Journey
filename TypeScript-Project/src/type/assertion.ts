let value: unknown;

let myvalue = value as string
const upp = myvalue.toUpperCase();


const yourValue = value as number
yourValue.toFixed()

let data: unknown

interface User{
    name: string,
    email?: string
}

const userData = data as User;
userData.name;
userData.email;

// as const

const sami: User = {
    name: 'sami',
    email: "sami@gmail.com"
} as const