import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'

import Dashboard from './pages/Dashboard'
import Estoque from './pages/Estoque'
import Cadastro from './pages/Cadastro'
import Manutencao from './pages/Manutencao'
import Historico from './pages/Historico'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/manutencao" element={<Manutencao />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App