import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad
  const score = good - bad
  const average = score / total | 0
  const positive = good / total * 100 | 0

  return (
    <div>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive} %</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveGood = () => setGood(good + 1)
  const giveNeutral = () => setNeutral(neutral + 1)
  const giveBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={giveGood}>Good</button>
      <button onClick={giveNeutral}>Neutral</button>
      <button onClick={giveBad}>Bad</button>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
