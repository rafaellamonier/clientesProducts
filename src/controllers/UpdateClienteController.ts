import { Request, Response, NextFunction } from "express";

import { UpdateClienteService } from "../services/UpdateClienteService.ts";

import { updateClienteSchema } from "../schemas/updateClienteSchema.ts";

export class UpdateClienteController {
	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const validatedData = updateClienteSchema.parse(req.body);

			const updateClienteService = new UpdateClienteService();

			const cliente = await updateClienteService.execute({
				id: Number(id),
				...validatedData,
			});

			return res.json(cliente);
		} catch (error) {
			next(error);
		}
	}
}
