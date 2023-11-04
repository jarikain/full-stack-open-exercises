const Header = ({course}) => <h2>{course}</h2>

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
      <Total parts={parts}/>
    </div>
  )
}

export default Course