import { Router } from "express";
import { CreatePedidoController } from "../controllers/CreatePedidoController";
import { UpdatePedidoController } from "../controllers/UpdatePedidoController";

const pedidosRoutes = Router();

const createPedidoController = new CreatePedidoController();
const updatePedidoController = new UpdatePedidoController();

pedidosRoutes.post("/", createPedidoController.handle);
pedidosRoutes.put("/:id", updatePedidoController.handle);

export { pedidosRoutes };
