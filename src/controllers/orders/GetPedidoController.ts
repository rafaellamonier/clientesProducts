import { Request, Response, NextFunction } from "express";
import { GetPedidoService } from "../../services/orders/GetPedidoService";

export class GetPedidoController {
	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const getPedidoService = new GetPedidoService();

			const pedido = await getPedidoService.execute({ id: Number(id) });

			return res.json(pedido);
		} catch (error) {
			next(error);
		}
	}
}
