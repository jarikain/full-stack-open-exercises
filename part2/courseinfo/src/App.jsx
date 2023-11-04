const Header = ({course}) => <h1>{course}</h1>

const Total = ({sum}) => <p>Number of exercises {sum}</p>

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
    }
  ]
  const partsWithIds = parts.map((part) => {
    part.id = `${part.exercises}-${part.name.substring(0, 3)}-${Math.random()}`
    return part
  })

  return (
    <div>
      <Course parts={partsWithIds} course={course}/>
      <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App