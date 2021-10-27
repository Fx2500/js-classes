import {Container, Wrapper, taskTitle, taskDescription} from './Styles'
import {postTask, deleteTask} from '../../services/requests.js'

export default function Tasks({title, description}) {
  return (
    <Container>
    <Wrapper>
      <taskTitle>{title}</taskTitle>
      <taskDescription>{description}</taskDescription>
    </Wrapper>
      <button onClick="postTask">Config</button>
    </Container>
  )
} 