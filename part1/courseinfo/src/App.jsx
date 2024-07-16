const Header = (content) => {
  return (
    <h1>{content.title}</h1>
  )
}

const Part = (content) => {
  return (
    <p>
      {content.name} {content.exercises}
    </p>
  )
}

const Content = (content) => {
  return (
    <div>
      <Part
        name = {content.parts[0].name}
        exercises = {content.parts[0].exercises}/>
      <Part
        name = {content.parts[1].name}
        exercises = {content.parts[1].exercises}/>
      <Part
        name = {content.parts[2].name}
        exercises = {content.parts[2].exercises}/>
    </div>
  )
}

const Total = (content) => {
  return (
    <p>
      Total Exercises{' '}
      {
        content.parts[0].exercises + 
        content.parts[1].exercises + 
        content.parts[2].exercises
      }
    </p>
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
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App