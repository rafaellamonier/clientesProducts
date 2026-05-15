import { Request, Response, NextFunction } from "express";
import { DeleteClienteService } from "../../services/customers/DeleteClienteService";

export class DeleteClienteController {
	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const deleteClienteService = new DeleteClienteService();

			await deleteClienteService.execute({
				id: Number(id),
			});

			return res.status(204).send();
		} catch (error) {
			next(error);
		}
	}
}
