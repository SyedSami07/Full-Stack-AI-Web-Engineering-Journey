import './App.css'

function App() {


  return (
    <>
          <h1>Get started</h1>
          <Person></Person>
          <Nusu></Nusu>
    </>
  )
}

function Person(){
  const roll1 = 7
  return <p>I am imas {roll1}</p>
}

function Nusu(){
  const roll = 32
  return (
    <>
    <p>I Love You</p>
    <p>Nusu {roll}</p>
    </>
  )
}

export default App
