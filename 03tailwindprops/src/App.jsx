
import './App.css'
import { Card } from './components/Card'

let myObj = {
  name: 'Lalit',
  age: 29,
  address: {
    city: 'kaithal',
    state: 'haryana'
  }
}

let newArray  = [1,2,3,3,3,45,6]
function App() {
  return (
    <>
      <h1 className='text-3xl  bg-green-500 p-3 rounded-md' >Vite with TailWind</h1>
      <Card userName='lalit' post='Staff Engineer'/>
      <Card myArr={newArray}/>
      <Card />
    </>
  )
}

export default App
