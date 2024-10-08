import { LiStyled, LinkStyled, ListTitleStyled, SpanStyled } from './styled'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <LiStyled>
    <ListTitleStyled>{props.titulo}</ListTitleStyled>
    <ul>
      <li><SpanStyled>Localização:</SpanStyled> {props.localizacao}</li>
      <li><SpanStyled>Senioridade:</SpanStyled> {props.nivel}</li>
      <li><SpanStyled>Tipo de contratacao:</SpanStyled> {props.modalidade}</li>
      <li>
      <SpanStyled>Salário:</SpanStyled> {props.salarioMin} - {props.salarioMax}
      </li>
      <li><SpanStyled>Requisitos:</SpanStyled> {props.requisitos.join(', ')}</li>
    </ul>
    <LinkStyled href="#">
      Ver detalhes e candidatar-se
    </LinkStyled>
  </LiStyled>
)

export default Vaga;
