import { useState } from "react"

export default function Counter(){
    
    const [count, setCount]= useState(0)
    const handleIncrease = () =>{
        setCount(count + 1)
    }
    
    return(
        <div>
            <h1>Counter</h1>
            <h2>Current Value: {count}</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}