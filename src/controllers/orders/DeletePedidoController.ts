import { Request, Response, NextFunction } from "express";
import { DeletePedidoService } from "../../services/orders/DeletePedidoService";

export class DeletePedidoController {
	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const deletePedidoService = new DeletePedidoService();

			await deletePedidoService.execute({
				id: Number(id),
			});

			return res.status(204).send();
		} catch (error) {
			next(error);
		}
	}
}
