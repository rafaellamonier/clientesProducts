import { Router } from "express";
import {
	CreatePedidoController,
	UpdatePedidoController,
	ListPedidosController,
	GetPedidoController,
	DeletePedidoController,
	SearchPedidosController,
} from "../controllers/orders/OrdersController";

const pedidosRoutes = Router();

const createPedidoController = CreatePedidoController();
const updatePedidoController = UpdatePedidoController();
const listPedidosController = ListPedidosController();
const getPedidoController = GetPedidoController();
const deletePedidoController = DeletePedidoController();
const searchPedidosController = SearchPedidosController();

pedidosRoutes.get("/", listPedidosController.handle);
pedidosRoutes.get("/search", searchPedidosController.handle);
pedidosRoutes.get("/:id", getPedidoController.handle);
pedidosRoutes.post("/", createPedidoController.handle);
pedidosRoutes.put("/:id", updatePedidoController.handle);
pedidosRoutes.delete("/:id", deletePedidoController.handle);

export { pedidosRoutes };
