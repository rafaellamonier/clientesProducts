import { Router } from "express";
import { 
    CreateClienteController,
    DeleteClienteController,
    ListClienteByIdController,
    ListClientesController,
    UpdateClienteController
} from "../controllers/customers/CustomersController";
import { ListPedidosByClienteController } from "../controllers/orders/OrdersController";

const clienteRoutes = Router();

const createClienteController = CreateClienteController();
const listClientesController =  ListClientesController();
const listClienteByIdController =  ListClienteByIdController();
const updateClienteController =  UpdateClienteController();
const deleteClienteController = DeleteClienteController();
const listPedidosByClienteController =  ListPedidosByClienteController();

clienteRoutes.post("/", createClienteController.handle);
clienteRoutes.get("/", listClientesController.handle);
clienteRoutes.get("/:id", listClienteByIdController.handle);
clienteRoutes.get("/:id/pedidos", listPedidosByClienteController.handle);
clienteRoutes.put("/:id", updateClienteController.handle);
clienteRoutes.delete("/:id", deleteClienteController.handle);

export { clienteRoutes };
