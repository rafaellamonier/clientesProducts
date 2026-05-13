import { Router } from "express";

import { CreateClienteController } from "../controllers/CreateClienteController.ts";
import { ListClientesController } from "../controllers/ListClientesController.ts";
import { UpdateClienteController } from "../controllers/UpdateClienteController.ts";
import { DeleteClienteController } from "../controllers/DeleteClienteController.ts";

const clienteRoutes = Router();

const createClienteController = new CreateClienteController();
const listClientesController = new ListClientesController();
const updateClienteController = new UpdateClienteController();
const deleteClienteController = new DeleteClienteController();

clienteRoutes.post("/", createClienteController.handle);
clienteRoutes.get("/", listClientesController.handle);
clienteRoutes.put("/:id", updateClienteController.handle);
clienteRoutes.delete("/:id", deleteClienteController.handle);

export { clienteRoutes };
