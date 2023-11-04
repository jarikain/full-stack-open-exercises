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
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 3
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>

      {courses.map(course =>
        <div key={course.id}>
          <Course parts={course.parts} course={course.name}/>
          <Total parts={course.parts}/>
        </div>
      )}
    </div>
  )
}

export default App