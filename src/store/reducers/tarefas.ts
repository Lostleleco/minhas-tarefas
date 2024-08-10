import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import { Prioridade, Estado } from '../../enums/index' // Certifique-se de que a importação está correta

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa('Estudar JavaScript', Prioridade.Alta, Estado.Pendente, '', 1),
    new Tarefa(
      'Estudar TypeScript',
      Prioridade.Alta,
      Estado.Concluida,
      'Rever aula 2 do modulo',
      2
    ),
    new Tarefa(
      'Estudar React',
      Prioridade.Media,
      Estado.Pendente,
      'Praticar o useEffect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefaSlice.actions
export default tarefaSlice.reducer
