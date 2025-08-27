import './App.css'
import { useState } from 'react'
import ShowCount from './Components/ShowCount'

function App() {
  const [count, setCount] = useState(0)

  const add = () => setCount(count + 1)
  const subtract = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className='app-container'>
      <h1>Contador con React</h1>

      <ShowCount value={count} />

      <div className='buttonsDiv'>
        <button className='btn add' onClick={add}>
          Sumar
        </button>
        <button
          className='btn subtract'
          onClick={subtract}
          disabled={count === 0}
        >
          Restar
        </button>
      </div>
    </div>
  )
}

export default App
