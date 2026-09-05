import './App.css'

function App() {


  return (
    <>
          <h1>My React</h1>
          <Student></Student>
          <Student></Student>
          <Student></Student>

    </>
  )
}


function Student(){

  const studentStyle = {
    border: '2px solid red'
  }
  return (
    <div style={studentStyle}>
      <h3>Name: </h3>
      <h3>Grades: </h3>
    </div>
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
