import {useState} from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  //let counter = 15

  const addValue = () => {
    setCounter((prevConter) => prevConter +1);
    setCounter((prevConter) => prevConter +1);
    setCounter((prevConter) => prevConter +1);
    setCounter((prevConter) => prevConter +1);
  }

  const removeValue = () => {
    setCounter((prevConter) => prevConter -1);
    setCounter((prevConter) => prevConter -1);
    setCounter((prevConter) => prevConter -1);
  }

  return (
    <>
      <h1>React Learning {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
