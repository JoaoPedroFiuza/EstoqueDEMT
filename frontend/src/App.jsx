import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'

import Dashboard from './pages/Dashboard'
import Estoque from './pages/Estoque'
import Cadastro from './pages/Cadastro'
import Manutencao from './pages/Manutencao'
import Historico from './pages/Historico'
import Detalhes from './pages/Detalhes'

function App() {
  const [equipamentos, setEquipamentos] = useState([
    {
      tomboCompleto: '202601245',
      tombo: '01245',
      equipamento: 'Dell OptiPlex 3080',
      categoria: 'Desktop',
      setorOrigem: 'Tecnologia',
      status: 'Em estoque',
      observacoes: 'Equipamento disponível no estoque.',
    },

    {
      tomboCompleto: '202601246',
      tombo: '01246',
      equipamento: 'Lenovo ThinkCentre M720',
      categoria: 'Desktop',
      setorOrigem: 'Tecnologia',
      status: 'Em manutenção',
      observacoes: 'Aguardando avaliação técnica.',
    },

    {
      tomboCompleto: '202601247',
      tombo: '01247',
      equipamento: 'HP ProDesk 400',
      categoria: 'Desktop',
      setorOrigem: 'Tecnologia',
      status: 'Em estoque',
      observacoes: 'Equipamento recebido recentemente.',
    },
  ])

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <div className="content">
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} />

            {/* Estoque */}
            <Route
              path="/estoque"
              element={<Estoque equipamentos={equipamentos} />}
            />

            {/* Cadastro */}
            <Route
              path="/cadastro"
              element={
                <Cadastro setEquipamentos={setEquipamentos} />
              }
            />

            {/* Manutenção */}
            <Route path="/manutencao" element={<Manutencao />} />

            {/* Histórico */}
            <Route path="/historico" element={<Historico />} />

            {/* Detalhes */}
            <Route
              path="/detalhes/:tombo"
              element={<Detalhes equipamentos={equipamentos} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App