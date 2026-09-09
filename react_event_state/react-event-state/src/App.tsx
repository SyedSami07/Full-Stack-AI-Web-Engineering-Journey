import './App.css'
import Counter from './Counter'
// import Cart from './cart'


function App() {

  // function handleClick(){
  //   alert("i love nusu")
  // }

  const handleClick = () =>{
    alert("i love nusu")
  }

  const handleAddToCart = (id) => {
    alert("i love nusuuu " + id)
  }
  return (
   <>
   <Counter></Counter>
  {/* //  <Cart></Cart>

  //   <button onClick={handleClick}>click me</button>

  //   <button onClick={() => handleAddToCart(32)}>i love nusu</button> */}
  </>
  )
}
export default App
