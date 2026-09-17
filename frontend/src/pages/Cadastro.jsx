import { useState } from 'react'

function Cadastro({ setEquipamentos }) {
  const [nome, setNome] = useState('')
  const [patrimonio, setPatrimonio] = useState('')
  const [categoria, setCategoria] = useState('')
  const [localizacao, setLocalizacao] = useState('')
  const [status, setStatus] = useState('estoque')

  const cadastrarEquipamento = () => {
    const novoEquipamento = {
      patrimonio: patrimonio,
      equipamento: nome,
      status:
        status === 'estoque'
          ? 'Em estoque'
          : status === 'manutencao'
            ? 'Em manutenção'
            : 'Com problema',
      funcionamento: 'Não testado',
      problema: '—',
    }

    setEquipamentos((equipamentosAtuais) => [
      ...equipamentosAtuais,
      novoEquipamento,
    ])

    setNome('')
    setPatrimonio('')
    setCategoria('')
    setLocalizacao('')
    setStatus('estoque')
  }

  return (
    <main>
      <div className="page-header">
        <div>
          <h1>Cadastrar equipamento</h1>
          <p>Preencha os dados do equipamento.</p>
        </div>
      </div>

      <div className="form-container">
        <div className="form-group">
          <label>Nome do equipamento</label>
          <input
            type="text"
            placeholder="Ex: Notebook Dell"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Patrimônio</label>
          <input
            type="text"
            placeholder="Ex: PAT-001"
            value={patrimonio}
            onChange={(e) => setPatrimonio(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Categoria</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            <option value="notebook">Notebook</option>
            <option value="desktop">Desktop</option>
            <option value="monitor">Monitor</option>
            <option value="impressora">Impressora</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div className="form-group">
          <label>Localização</label>
          <input
            type="text"
            placeholder="Ex: Sala 01"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="estoque">Em estoque</option>
            <option value="manutencao">Em manutenção</option>
            <option value="problema">Com problema</option>
          </select>
        </div>

        <button
          className="primary-button"
          onClick={cadastrarEquipamento}
        >
          Cadastrar equipamento
        </button>
      </div>
    </main>
  )
}

export default Cadastro
