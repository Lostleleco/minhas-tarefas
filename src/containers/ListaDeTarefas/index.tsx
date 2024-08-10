import Tarefa from '../../components/FiltroCard/tarefa/index'

import { Container } from './style'

const ListaDeTarefas = () => (
  <Container>
    <p>
      2 tarefas marcadas como : &quot;catergoria &lqquo; e &quot;termo&lqquo;
    </p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas
