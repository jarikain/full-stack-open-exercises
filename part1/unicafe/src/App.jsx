import {useState} from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistic = ({title, value}) => <p>{title} {value}</p>

const Total = (props) => {
  const { feedbacks: {good, neutral, bad }} = props
  return (
    <p>all {good + neutral + bad}</p>
  )
}

const Average = (props) => {
  const { feedbacks: {good, neutral, bad }} = props

  const total = good + neutral + bad
  const score = good + bad * -1
  const average =  score/total

  return (
    <p>average {average || 0}</p>
  )
}

const Positive = props => {
  const { feedbacks: {good, neutral, bad }} = props
  const total = good + neutral + bad

  return (
    <p>positive {good/total*100 || 0} %</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbacks = {good, neutral, bad}

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
      <Total feedbacks={feedbacks} />
      <Average feedbacks={feedbacks}/>
      <Positive feedbacks={feedbacks} />
    </div>
  )
}

export default App