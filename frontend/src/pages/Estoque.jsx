function Estoque({ equipamentos }) {
   

  return (
    <main>
      <div className="page-header">
        <div>
          <h1>Estoque</h1>
          <p>Controle dos equipamentos disponíveis.</p>
        </div>

        <button className="primary-button">
          + Cadastrar equipamento
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Patrimônio</th>
              <th>Equipamento</th>
              <th>Status</th>
              <th>Funcionamento</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {equipamentos.map((equipamento) => (
              <tr key={equipamento.patrimonio}>
                <td>{equipamento.patrimonio}</td>
                <td>{equipamento.equipamento}</td>
                <td>{equipamento.status}</td>
                <td>{equipamento.funcionamento}</td>
                <td>{equipamento.problema}</td>
                <td>
                  <button className="action-button">
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