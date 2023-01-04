import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState('')

  setTimeout(
    () => {
      setData('New data arrived.')
      setIsLoading(false)
    },
    9000
  )

  const incrementByOne = () => setCounter(counter + 1)
  const decrementByOne = () => setCounter(counter - 1)
  const resetToZero = () => setCounter(0)

  let toRender = isLoading
    ? (<p>Loading data...</p>)
    : (<p>{data}</p>)

  return (
    <div>
      {toRender}
      <div>{counter}</div>
      <button onClick={incrementByOne} disabled={counter >= 10}>
        Increment
      </button>
      <button onClick={decrementByOne}>
        Decrement
      </button>
      <button onClick={resetToZero}>
        Reset
      </button>
    </div>
  )
}

export default App
