import { useState } from 'react'

function Cadastro({ setEquipamentos }) {
  const [nome, setNome] = useState('')
  const [tomboCompleto, setTomboCompleto] = useState('')
  const [categoria, setCategoria] = useState('')
  const [setorOrigem, setSetorOrigem] = useState('')
  const [status, setStatus] = useState('estoque')
  const [observacoes, setObservacoes] = useState('')

  const cadastrarEquipamento = () => {
    const nomeLimpo = nome.trim()
    const tomboLimpo = tomboCompleto.trim()
    const categoriaLimpa = categoria.trim()
    const setorOrigemLimpo = setorOrigem.trim()
    const observacoesLimpas = observacoes.trim()

    // Verifica os campos obrigatórios
    if (
      !nomeLimpo ||
      !tomboLimpo ||
      !categoriaLimpa ||
      !setorOrigemLimpo
    ) {
      alert('Preencha todos os campos obrigatórios antes de cadastrar.')
      return
    }

    // O tombo precisa ter pelo menos 5 dígitos
    if (tomboLimpo.length < 5) {
      alert('O tombo deve possuir pelo menos 5 dígitos.')
      return
    }

    // Pega somente os 5 últimos dígitos
    const tombo = tomboLimpo.slice(-5)

    let cadastroRealizado = false

    setEquipamentos((equipamentosAtuais) => {
      // Verifica se o tombo já existe
      const tomboExiste = equipamentosAtuais.some(
        (equipamento) => equipamento.tombo === tombo
      )

      if (tomboExiste) {
        alert(
          `O tombo ${tombo} já está cadastrado. Não é possível cadastrar outro equipamento com o mesmo tombo.`
        )

        return equipamentosAtuais
      }

      const novoEquipamento = {
        tomboCompleto: tomboLimpo,
        tombo,
        equipamento: nomeLimpo,
        categoria: categoriaLimpa,
        setorOrigem: setorOrigemLimpo,

        status:
          status === 'estoque'
            ? 'Em estoque'
            : status === 'manutencao'
              ? 'Em manutenção'
              : 'Com problema',

        observacoes: observacoesLimpas,
      }

      cadastroRealizado = true

      return [...equipamentosAtuais, novoEquipamento]
    })

    if (!cadastroRealizado) {
      return
    }

    // Limpa o formulário
    setNome('')
    setTomboCompleto('')
    setCategoria('')
    setSetorOrigem('')
    setStatus('estoque')
    setObservacoes('')

    alert('Equipamento cadastrado com sucesso!')
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
          <label>Tombo</label>

          <input
            type="text"
            inputMode="numeric"
            placeholder="Digite o tombo completo"
            value={tomboCompleto}
            onChange={(e) => {
              const valor = e.target.value.replace(/\D/g, '')
              setTomboCompleto(valor)
            }}
          />

          <small>
            O sistema utilizará os 5 últimos dígitos do tombo.
          </small>
        </div>

        <div className="form-group">
          <label>Categoria</label>

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            <option value="Notebook">Notebook</option>
            <option value="Tablet">Tablet</option>
            <option value="Smartphone">Smartphone</option>
            <option value="Mini PC">Mini PC</option>
            <option value="Desktop">Desktop</option>
            <option value="Monitor">Monitor</option>
            <option value="Impressora">Impressora</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div className="form-group">
          <label>Setor de origem</label>

          <input
            type="text"
            placeholder="Ex: Recursos Humanos"
            value={setorOrigem}
            onChange={(e) => setSetorOrigem(e.target.value)}
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

        <div className="form-group">
          <label>Observações</label>

          <textarea
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
            placeholder="Digite uma observação sobre o equipamento... (Opcional)"
            rows="4"
          />
        </div>

        <button
          type="button"
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