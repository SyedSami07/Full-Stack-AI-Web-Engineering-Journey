export default function Cart(){

    let counter = 0
    const handleADdToCart = () =>{
        counter+=1
    }
   
    return (
        <div>
             <h3> Shopping Cart </h3>
             <p>Items in the cart: {counter} </p>
             <button onClick={handleADdToCart}>Add</button>
        </div>
    )
}