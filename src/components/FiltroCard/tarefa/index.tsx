import * as S from './styles'

const Tarefa = () => (
  <S.card>
    <S.Titulo>nome tarefa</S.Titulo>
    <S.Tag>Importantes</S.Tag>
    <S.Tag>Pendente</S.Tag>
    <S.Descricao />
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.card>
)

export default Tarefa
