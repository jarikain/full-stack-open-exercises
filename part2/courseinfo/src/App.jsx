const Header = ({course}) => <h1>{course}</h1>

const Total = ({parts}) => {
  const sum = parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0
  )
  return (
    <p><strong>total of {sum} exercises</strong></p>
  )
}

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Content = ({parts}) => {
  return parts.map(part => (
    <Part part={part} key={part.id}/>
  ))
}

const Course = ({course, parts}) => {
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
    {
      name: 'Redux',
      exercises: 11
    }
  ]
  const partsWithIds = parts.map((part) => {
    part.id = `${part.exercises}-${part.name.substring(0, 3)}-${Math.random()}`
    return part
  })

  return (
    <div>
      <Course parts={partsWithIds} course={course}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App