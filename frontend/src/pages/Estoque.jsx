import { useNavigate } from 'react-router-dom'

function Estoque({ equipamentos }) {
  const navigate = useNavigate()

  return (
    <main>
      <div className="page-header">
        <div>
          <h1>Estoque</h1>
          <p>Controle dos equipamentos cadastrados.</p>
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={() => navigate('/cadastro')}
        >
          + Cadastrar equipamento
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Tombo</th>
              <th>Equipamento</th>
              <th>Tipo</th>
              <th>Setor de origem</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {equipamentos.map((equipamento) => (
              <tr key={equipamento.tombo}>
                <td>{equipamento.tombo}</td>

                <td>{equipamento.equipamento}</td>

                <td>{equipamento.categoria}</td>

                <td>{equipamento.setorOrigem}</td>

                <td>{equipamento.status}</td>

                <td>
                  <button
                    type="button"
                    className="action-button"
                    onClick={() =>
                      navigate(`/detalhes/${equipamento.tombo}`)
                    }
                  >
                    Ver detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Estoque