import './App.css'

function App() {


  return (
    <>
          <h1>My React</h1>

          <Developer language = "javascript" experience = "4 years"></Developer>
          <Developer language = "Python" experience = "4 years"></Developer>
          {/* <Student name = "i love nusu" gpa = "3.33"></Student>
          <Student></Student>
          <Student></Student> */}

    </>
  )
}


function Developer(props){
  console.log(props)
  return (
    <div>
      <div className='student'></div>
      <h4>I love developer nusu: {props.language} </h4>
    </div>
    
  )
}

function Student(props){
console.log('inside the student component', props)
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
