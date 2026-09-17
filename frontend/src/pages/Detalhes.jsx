import { useParams, useNavigate } from 'react-router-dom'

function Detalhes({ equipamentos }) {
  const { tombo } = useParams()
  const navigate = useNavigate()

  const equipamento = equipamentos.find(
    (item) => item.tombo === tombo
  )

  if (!equipamento) {
    return (
      <main>
        <div className="page-header">
          <div>
            <h1>Equipamento não encontrado</h1>
            <p>
              Não foi possível encontrar esse equipamento no estoque.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={() => navigate('/estoque')}
        >
          Voltar para o estoque
        </button>
      </main>
    )
  }

  return (
    <main>
      <div className="page-header">
        <div>
          <h1>Detalhes do equipamento</h1>
          <p>Informações completas do equipamento.</p>
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={() => navigate('/estoque')}
        >
          Voltar
        </button>
      </div>

      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <th>Tombo</th>
              <td>{equipamento.tombo}</td>
            </tr>

            <tr>
              <th>Tombo completo</th>
              <td>{equipamento.tomboCompleto}</td>
            </tr>

            <tr>
              <th>Equipamento</th>
              <td>{equipamento.equipamento}</td>
            </tr>

            <tr>
              <th>Tipo</th>
              <td>{equipamento.categoria || 'Não informado'}</td>
            </tr>

            <tr>
              <th>Setor de origem</th>
              <td>{equipamento.setorOrigem || 'Não informado'}</td>
            </tr>

            <tr>
              <th>Status</th>
              <td>{equipamento.status}</td>
            </tr>

            <tr>
              <th>Observações</th>
              <td>
                {equipamento.observacoes || 'Nenhuma observação'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Detalhes