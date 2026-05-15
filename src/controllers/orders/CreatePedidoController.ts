import { Request, Response, NextFunction } from "express";
import { createPedidoSchema } from "../../schemas/createPedidoSchema";
import { CreatePedidoService } from "../../services/orders/CreatePedidoService";

export class CreatePedidoController {
	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { descricao, total, cliente_id } = createPedidoSchema.parse(req.body);

			const createPedidoService = new CreatePedidoService();

			const pedido = await createPedidoService.execute({ descricao, total, cliente_id });

			return res.status(201).json(pedido);
		} catch (error) {
			next(error);
		}
	}
}
