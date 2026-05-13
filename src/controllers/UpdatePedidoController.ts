import { Request, Response, NextFunction } from "express";
import { UpdatePedidoService } from "../services/UpdatePedidoService";
import { updatePedidoSchema } from "../schemas/updatePedidoSchema";

export class UpdatePedidoController {
	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const validatedData = updatePedidoSchema.parse(req.body);

			const updatePedidoService = new UpdatePedidoService();

			const pedido = await updatePedidoService.execute({
				id: Number(id),
				...validatedData,
			});

			return res.json(pedido);
		} catch (error) {
			next(error);
		}
	}
}
