import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source.ts";
import { Cliente } from "../entities/Cliente";

export class ListClientesController {
	async handle(req: Request, res: Response) {
		const clienteRepository = AppDataSource.getRepository(Cliente);

		const clientes = await clienteRepository.find({
			relations: {
				pedidos: true,
			},
		});

		return res.json(clientes);
	}
}
