import './App.css'

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
    <button onClick={handleClick}>click me</button>

    <button onClick={() => handleAddToCart(32)}>i love nusu</button>
    </>
  )
}

export default App
