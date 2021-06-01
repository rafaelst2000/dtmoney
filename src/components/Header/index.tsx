import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewModalTransactionModal: () => void
}

export function Header ({ onOpenNewModalTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onOpenNewModalTransactionModal} type="button">Nova transação</button>
      </Content>
    </Container>
  )
}