import { Request, Response, NextFunction } from "express";
import { ListClientesService } from "../../services/customers/ListClientesService";

export class ListClientesController {
	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const listClientesService = new ListClientesService();

			const clientes = await listClientesService.execute();

			return res.json(clientes);
		} catch (error) {
			next(error);
		}
	}
}
