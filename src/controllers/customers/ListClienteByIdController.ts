import { Request, Response, NextFunction } from "express";
import { ListClienteByIdService } from "../../services/customers/ListClienteByIdService";

export class ListClienteByIdController {
	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const listClienteByIdService = new ListClienteByIdService();

			const cliente = await listClienteByIdService.execute({ id: Number(id) });

			return res.json(cliente);
		} catch (error) {
			next(error);
		}
	}
}
