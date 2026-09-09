import { useState } from "react"

export default function Nusu(){

   const [chocolate, setChocolate] = useState(0)

   const handleChocolateCount = () =>{
    setChocolate(chocolate + 1)
   }

   const handleChocolateByFour = () => {
    setChocolate(chocolate + 4)
   }
    return(
       <div>
       <p>---------------------</p>
         <h3>my nusu want chocolates</h3>
        <p>click to the button below to increase chocolates</p>
        <button onClick={handleChocolateCount}>Give a chocolate</button>
        <h4>Total Chocolates: {chocolate}</h4>
        <button onClick={handleChocolateByFour}>Increase chocolate by 4</button>
      </div>
    )
}