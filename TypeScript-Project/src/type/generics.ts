interface Response<T>{
    data: T;
    status: number
}

const transectionResponse: Response<string> = {
    data: "Transaction Sucessful",
    status: 200
}

const transectionStatus: Response<boolean> = {
    data: true,
    status: 200
}


const transactionAmount: Response<number> = {
    data: 732,
    status: 401
}

function getLength<item>(array: item[]): number{
    return array.Length
}

getLength<string> (['', '', '3'])