import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'

import Dashboard from './pages/Dashboard'
import Estoque from './pages/Estoque'
import Cadastro from './pages/Cadastro'
import Manutencao from './pages/Manutencao'
import Historico from './pages/Historico'

function App() {
  const [equipamentos, setEquipamentos] = useState([
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
  ])

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <div className="content">
        <Routes>
  <Route path="/" element={<Dashboard />} />

  <Route
    path="/estoque"
    element={<Estoque equipamentos={equipamentos} />}
  />

  <Route
    path="/cadastro"
    element={<Cadastro setEquipamentos={setEquipamentos} />}
  />

  <Route path="/manutencao" element={<Manutencao />} />

  <Route path="/historico" element={<Historico />} />
</Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App