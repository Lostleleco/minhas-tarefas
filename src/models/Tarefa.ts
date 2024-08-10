import { Prioridade, Estado } from '../enums'

export class Tarefa {
  titulo: string
  prioridade: Prioridade
  estado: Estado
  descricao: string
  id: number
  status: string | undefined

  constructor(
    titulo: string,
    prioridade: Prioridade,
    estado: Estado,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.estado = estado
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
