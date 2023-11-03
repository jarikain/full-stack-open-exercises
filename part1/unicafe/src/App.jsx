import {useState} from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Statistics = props => {
  const { feedbacks: {good, neutral, bad }} = props

  const total = good + neutral + bad
  if (!total) {
    return <p>No feedback given</p>
  }

  const score = good + bad * -1
  const average =  score/total
  const positive = good/total*100 + " %"

  return (
    <div>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
    </div>
  )
}

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
      <Statistics feedbacks={{good, neutral, bad}}/>
    </div>
  )
}

export default App