import { Request, Response, NextFunction } from "express";
import { SearchPedidosService } from "../../services/orders/SearchPedidosService";
import { PedidoStatus } from "../../entities/Pedido";

export class SearchPedidosController {
	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { status, minTotal, maxTotal, startDate, endDate } = req.query;

			const searchPedidosService = new SearchPedidosService();

			const pedidos = await searchPedidosService.execute({
				status: status as PedidoStatus | undefined,
				minTotal: minTotal ? Number(minTotal) : undefined,
				maxTotal: maxTotal ? Number(maxTotal) : undefined,
				startDate: startDate as string | undefined,
				endDate: endDate as string | undefined,
			});

			return res.json(pedidos);
		} catch (error) {
			next(error);
		}
	}
}
