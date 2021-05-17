import { Container } from './styles'
import { useEffect } from 'react'

export function TransactionsTable () {
  useEffect(() => {
    fetch('https://localhost:3000/api/transactions')
      .then(res => res.json())
      .then(data => console.log('data', data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="depposit"> +R$12.000</td>
            <td>Desenvolvimento</td>
            <td>12/12/2000</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> -R$1.100</td>
            <td>Casa</td>
            <td>20/12/2000</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}