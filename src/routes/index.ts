import { Router } from "express";

import { clienteRoutes } from "./clientes.routes";
import { pedidosRoutes } from "./pedidos.routes";

const routes = Router();

routes.use("/clientes", clienteRoutes);
routes.use("/pedidos", pedidosRoutes);

export { routes };
