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

### Clientes

| Método | Rota                      | Descrição                              |
|--------|---------------------------|----------------------------------------|
| POST   | /clientes                 | Cria um novo cliente                   |
| GET    | /clientes                 | Lista todos os clientes                |
| GET    | /clientes/:id             | Busca um cliente pelo ID               |
| GET    | /clientes/:id/pedidos     | Lista todos os pedidos de um cliente   |
| PUT    | /clientes/:id             | Atualiza os dados de um cliente        |
| DELETE | /clientes/:id             | Remove um cliente                      |

### Pedidos

| Método | Rota                      | Descrição                              |
|--------|---------------------------|----------------------------------------|
| POST   | /pedidos                  | Cria um novo pedido                    |
| GET    | /pedidos                  | Lista todos os pedidos                 |
| GET    | /pedidos/search           | Busca pedidos com filtros              |
| GET    | /pedidos/:id              | Busca um pedido pelo ID                |
| PUT    | /pedidos/:id              | Atualiza os dados de um pedido         |
| DELETE | /pedidos/:id              | Remove um pedido                       |

### Filtros disponíveis em GET /pedidos/search

| Query Param | Tipo   | Exemplo                  |
|-------------|--------|--------------------------|
| `status`    | string | `?status=PENDING`        |
| `minTotal`  | number | `?minTotal=100`          |
| `maxTotal`  | number | `?maxTotal=500`          |
| `startDate` | string | `?startDate=2026-01-01`  |
| `endDate`   | string | `?endDate=2026-12-31`    |

**Exemplo combinado:** `GET /pedidos/search?status=PAID&minTotal=50&startDate=2026-01-01`

### Observações

- O campo `status` do pedido aceita apenas: `PENDING`, `PAID` ou `CANCELED`
- O campo `total` deve ser maior que zero
- Não é possível criar um pedido sem vincular um cliente existente

---

## Roadmap do fluxo do sistema

Siga esta ordem para testar o sistema do início ao fim:

### 1. Criar um cliente
```
POST /clientes
Body: { "nome": "João Silva", "email": "joao@email.com", "telefone": "11999999999" }
```

### 2. Listar todos os clientes
```
GET /clientes
```
Verifique se o cliente foi criado corretamente.

### 3. Buscar o cliente pelo ID
```
GET /clientes/:id
```
Confirme os dados do cliente e anote o ID para usar nos próximos passos.

### 4. Criar um pedido vinculado ao cliente
```
POST /pedidos
Body: { "descricao": "Pedido de teste", "total": 150.00, "cliente_id": 1 }
```
O pedido será criado com status `PENDING` automaticamente.

### 5. Listar todos os pedidos
```
GET /pedidos
```
Verifique se o pedido foi criado e se está vinculado ao cliente correto.

### 6. Buscar o pedido pelo ID
```
GET /pedidos/:id
```

### 7. Listar os pedidos de um cliente específico
```
GET /clientes/:id/pedidos
```
Retorna todos os pedidos vinculados ao cliente informado.

### 8. Atualizar o status do pedido
```
PUT /pedidos/:id
Body: { "descricao": "Pedido de teste", "total": 150.00, "status": "PAID" }
```
Marque o pedido como pago (`PAID`) ou cancelado (`CANCELED`).

### 9. Atualizar os dados do cliente
```
PUT /clientes/:id
Body: { "nome": "João Atualizado", "email": "joao.novo@email.com", "telefone": "11888888888" }
```

### 10. Remover um pedido
```
DELETE /pedidos/:id
```

### 11. Remover um cliente
```
DELETE /clientes/:id
```
Ao remover um cliente, todos os pedidos vinculados a ele serão removidos automaticamente (CASCADE).

