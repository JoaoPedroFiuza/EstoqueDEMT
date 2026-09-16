# 📦 estoqueDemt

Sistema web para gerenciamento e controle de equipamentos em estoque.

O projeto está sendo desenvolvido com foco em organização, rastreabilidade e facilidade de gerenciamento de equipamentos de TI, permitindo futuramente controlar cadastros, status, funcionamento, manutenção e histórico.

---

## 🎯 Objetivo

O estoqueDemt tem como objetivo centralizar o controle dos equipamentos de TI mantidos em estoque, facilitando a consulta das informações e o acompanhamento da situação de cada equipamento.

O sistema foi pensado para evoluir de forma modular, permitindo a implementação de novas funcionalidades conforme a necessidade.

---

## 🛠️ Tecnologias

### Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3
- React Router
- ESLint

### Backend

- Node.js
- Express

### Banco de dados

- PostgreSQL
- Prisma ORM

### Versionamento

- Git
- GitHub

> Algumas tecnologias do backend e banco de dados fazem parte do planejamento e serão implementadas nas próximas etapas do projeto.

---

## ✨ Funcionalidades

### Atualmente

- [x] Estrutura inicial do projeto
- [x] Dashboard
- [x] Navegação entre páginas
- [x] Tela de estoque
- [x] Estrutura de cadastro de equipamentos
- [x] Estrutura de manutenção
- [x] Estrutura de histórico
- [x] Layout inicial do sistema

### Em desenvolvimento

- [ ] Cadastro completo de equipamentos
- [ ] Banco de dados
- [ ] API REST
- [ ] Pesquisa de equipamentos
- [ ] Filtros por status
- [ ] Visualização de detalhes
- [ ] Histórico de alterações
- [ ] Controle de manutenção
- [ ] Edição de equipamentos
- [ ] QR Code para identificação
- [ ] Autenticação de usuários

---

## 📋 Informações dos equipamentos

O sistema foi planejado para trabalhar com informações como:

- Patrimônio
- Tipo de equipamento
- Marca
- Modelo
- Número de série
- Status
- Funcionamento
- Problema
- Observações
- Data de cadastro
- Última atualização

### Status

Exemplos:

- Em estoque
- Em manutenção
- Separado para entrega
- Baixado

### Funcionamento

Exemplos:

- Funcionando
- Com problema
- Não funciona
- Não testado

A separação entre **Status** e **Funcionamento** permite diferenciar a situação administrativa do equipamento da sua condição técnica.

---

## 📁 Estrutura atual

```text
estoqueDemt/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   └── Sidebar.jsx
│       ├── pages/
│       │   ├── Dashboard.jsx
│       │   ├── Estoque.jsx
│       │   ├── Cadastro.jsx
│       │   ├── Manutencao.jsx
│       │   └── Historico.jsx
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── main.jsx
│
├── docs/
│
└── README.md