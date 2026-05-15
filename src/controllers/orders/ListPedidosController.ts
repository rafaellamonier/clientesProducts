import { Request, Response, NextFunction } from "express";
import { ListPedidosService } from "../../services/orders/ListPedidosService";

export class ListPedidosController {
	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const listPedidosService = new ListPedidosService();

			const pedidos = await listPedidosService.execute();

			return res.json(pedidos);
		} catch (error) {
			next(error);
		}
	}
}
