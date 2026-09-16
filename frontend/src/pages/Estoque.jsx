function Estoque() {
  const equipamentos = [
    {
      patrimonio: '001245',
      equipamento: 'Dell OptiPlex 3080',
      status: 'Em estoque',
      funcionamento: 'Funcionando',
      problema: '—',
    },
    {
      patrimonio: '001246',
      equipamento: 'Lenovo ThinkCentre M720',
      status: 'Em manutenção',
      funcionamento: 'Com problema',
      problema: 'Não liga',
    },
    {
      patrimonio: '001247',
      equipamento: 'HP ProDesk 400',
      status: 'Em estoque',
      funcionamento: 'Não testado',
      problema: '—',
    },
  ]

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