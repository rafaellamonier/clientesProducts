import { Router } from "express";
import { CreatePedidoController } from "../controllers/orders/CreatePedidoController";
import { UpdatePedidoController } from "../controllers/orders/UpdatePedidoController";
import { ListPedidosController } from "../controllers/orders/ListPedidosController";
import { GetPedidoController } from "../controllers/orders/GetPedidoController";
import { DeletePedidoController } from "../controllers/orders/DeletePedidoController";
import { SearchPedidosController } from "../controllers/orders/SearchPedidosController";

const pedidosRoutes = Router();

const createPedidoController = new CreatePedidoController();
const updatePedidoController = new UpdatePedidoController();
const listPedidosController = new ListPedidosController();
const getPedidoController = new GetPedidoController();
const deletePedidoController = new DeletePedidoController();
const searchPedidosController = new SearchPedidosController();

pedidosRoutes.get("/", listPedidosController.handle);
pedidosRoutes.get("/search", searchPedidosController.handle);
pedidosRoutes.get("/:id", getPedidoController.handle);
pedidosRoutes.post("/", createPedidoController.handle);
pedidosRoutes.put("/:id", updatePedidoController.handle);
pedidosRoutes.delete("/:id", deletePedidoController.handle);

export { pedidosRoutes };
