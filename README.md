# clientesProducts API

API REST para gerenciamento de clientes e pedidos, construída com Node.js, TypeScript, Express e TypeORM + PostgreSQL.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/) e Docker Compose

## Passo a passo

### 1. Clone o repositório e instale as dependências

```bash
npm install
```

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_PORT=5433
DB_USER=admin
DB_PASSWORD=admin
DB_NAME=backend_test
```

### 3. Suba o banco de dados com Docker

```bash
docker-compose up -d
```

### 4. Inicie a aplicação em modo de desenvolvimento

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`.

## Rotas disponíveis

| Método | Rota              | Descrição              |
|--------|-------------------|------------------------|
| GET    | /clientes         | Lista todos os clientes |
| POST   | /clientes         | Cria um cliente        |
| PUT    | /clientes/:id     | Atualiza um cliente    |
| DELETE | /clientes/:id     | Remove um cliente      |
| POST   | /pedidos          | Cria um pedido         |
| PUT    | /pedidos/:id      | Atualiza um pedido     |
