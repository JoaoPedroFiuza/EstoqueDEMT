import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h1>estoqueDemt</h1>
        <span>Controle de Equipamentos</span>
      </div>

      <nav className="menu">
        <Link to="/">Dashboard</Link>
        <Link to="/estoque">Estoque</Link>
        <Link to="/cadastro">Cadastrar equipamento</Link>
        <Link to="/manutencao">Manutenção</Link>
        <Link to="/historico">Histórico</Link>
      </nav>
    </aside>
  )
}

export default Sidebar