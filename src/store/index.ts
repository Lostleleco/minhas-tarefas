import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer
  }
})

type RootState = ReturnType<typeof store.getState>

export default store
export type { RootState }
