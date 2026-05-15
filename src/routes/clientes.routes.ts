import { Router } from "express";
import { CreateClienteController } from "../controllers/customers/CreateClienteController";
import { ListClientesController } from "../controllers/customers/ListClientesController";
import { ListClienteByIdController } from "../controllers/customers/ListClienteByIdController";
import { UpdateClienteController } from "../controllers/customers/UpdateClienteController";
import { DeleteClienteController } from "../controllers/customers/DeleteClienteController";
import { ListPedidosByClienteController } from "../controllers/orders/ListPedidosByClienteController";

const clienteRoutes = Router();

const createClienteController = new CreateClienteController();
const listClientesController = new ListClientesController();
const listClienteByIdController = new ListClienteByIdController();
const updateClienteController = new UpdateClienteController();
const deleteClienteController = new DeleteClienteController();
const listPedidosByClienteController = new ListPedidosByClienteController();

clienteRoutes.post("/", createClienteController.handle);
clienteRoutes.get("/", listClientesController.handle);
clienteRoutes.get("/:id", listClienteByIdController.handle);
clienteRoutes.get("/:id/pedidos", listPedidosByClienteController.handle);
clienteRoutes.put("/:id", updateClienteController.handle);
clienteRoutes.delete("/:id", deleteClienteController.handle);

export { clienteRoutes };
