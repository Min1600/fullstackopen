const Header = (props) =>{
console.log(props)
return(
  <>
    {props.content}
  </>
)
}

const Part = (props) =>{
  console.log(props)
  return(
    <>
    {props.content} {props.number} 
    </>
  )
}
const Content = (props) =>{
  console.log(props)
  return(
    <>
    <p><Part content = {props.part[0]} number = {props.exercises[0]}/></p>
    <p><Part content = {props.part[1]} number = {props.exercises[1]}/></p>
    <p><Part content = {props.part[2]} number = {props.exercises[2]}/></p>
    </>
  )
}

const Total = (props) =>{
  console.log(props)
  return(
    <>
   {props.exercise[0] + props.exercise[1] + props.exercise[2]}
    </>
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
      <h1><Header content={course.name} /></h1>
        <Content part={[course.parts[0].name,course.parts[1].name,course.parts[2].name]} exercises={[course.parts[0].exercises,course.parts[1].exercises,course.parts[2].exercises]}/> 
      <p>Number of exercises <Total exercise={[course.parts[0].exercises,course.parts[1].exercises,course.parts[2].exercises]} /> </p>
    </div>
  )
}

export default App

  