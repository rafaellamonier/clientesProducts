import { Request, Response, NextFunction } from "express";
import { ListPedidosByClienteService } from "../../services/orders/ListPedidosByClienteService";

export class ListPedidosByClienteController {
	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const listPedidosByClienteService = new ListPedidosByClienteService();

			const pedidos = await listPedidosByClienteService.execute({ clienteId: Number(id) });

			return res.json(pedidos);
		} catch (error) {
			next(error);
		}
	}
}
