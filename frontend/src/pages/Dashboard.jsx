function Dashboard() {
  return (
    <main>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Visão geral do estoque</p>
        </div>
      </div>

      <section className="dashboard-cards">
        <div className="dashboard-card">
          <h2>Equipamentos</h2>
          <strong>0</strong>
          <span>Total cadastrado</span>
        </div>

        <div className="dashboard-card">
          <h2>Em estoque</h2>
          <strong>0</strong>
          <span>Disponíveis</span>
        </div>

        <div className="dashboard-card">
          <h2>Em manutenção</h2>
          <strong>0</strong>
          <span>Em atendimento</span>
        </div>

        <div className="dashboard-card">
          <h2>Com problema</h2>
          <strong>0</strong>
          <span>Precisam de atenção</span>
        </div>
      </section>
    </main>
  )
}

export default Dashboard

