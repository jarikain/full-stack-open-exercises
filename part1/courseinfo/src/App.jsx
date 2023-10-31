const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  const [part1, part2, part3] = props.parts

  return (
    <div>
      <Part part={part1}/>
      <Part part={part2}/>
      <Part part={part3}/>
    </div>
  )
}

const Part = (props) => {
  const {name, exercises} = props.part

  return (
    <p> {name} {exercises} </p>
  )
}

const Total = (props) => {
  let sum = 0
  props.parts.forEach(part => sum += part.exercises)

  return (
    <p>Number of exercises {sum}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App

