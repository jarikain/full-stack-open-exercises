import {useState} from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistic = ({title, value}) => <p>{title} {value}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Unicafe Feedback App</h1>

      <h2>Give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>

      <h2>Statistics</h2>
      <Statistic title="good" value={good}/>
      <Statistic title="neutral" value={neutral}/>
      <Statistic title="bad" value={bad}/>
    </div>
  )
}

export default App