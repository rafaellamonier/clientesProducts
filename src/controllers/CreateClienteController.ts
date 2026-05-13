import { Request, Response, NextFunction } from "express";
import { CreateClienteService } from "../services/CreateClienteService";
import { createClienteSchema } from "../schemas/createClienteSchema";

export class CreateClienteController {
	async handle(req: Request, res: Response, next: NextFunction) {
		try {
			console.log('teste req.body', req.body);
			const validatedData = createClienteSchema.parse(req.body);

			const createClienteService = new CreateClienteService();

			const cliente = await createClienteService.execute(validatedData);

			return res.status(201).json(cliente);
		} catch (error) {
			next(error);
		}
	}
}
