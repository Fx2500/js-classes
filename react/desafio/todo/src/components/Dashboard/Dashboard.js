
import {Container, Title, Tab} from "./styles"
import Tasks from "../Tasks/Tasks"
import {useEffect, useState} from "react"
import {getTask} from '../../services/requests.js'


function Dashboard() {
  const [task, setTask] = useState([])
    useEffect(() => {
      async function loadTask() {
        const response = await getTask()
        setTask(response.data.tasks)
      }
      loadTask()
    },[])


  return (
  <Container>
      <Title>To-Do List</Title>
      <Tab>6 tasks left</Tab>
      {task.map((elem) => <Tasks key={elem.id} title={elem.title} description = {elem.description}/> )}
  </Container>
  )
}
export default Dashboard