import { Request, Response } from "express";

import { AppDataSource } from "../database/data-source";

import { Pedido, PedidoStatus } from "../entities/Pedido.ts";
import { Cliente } from "../entities/Cliente.ts";

export class CreatePedidoController {
	async handle(req: Request, res: Response) {
		const { descricao, total, cliente_id } = req.body;

		console.log("teste cliente_id", cliente_id);

		const clienteRepository = AppDataSource.getRepository(Cliente);
		const pedidoRepository = AppDataSource.getRepository(Pedido);

		const cliente = await clienteRepository.findOne({
			where: {
				id: cliente_id,
			},
		});

		console.log("teste cliente", cliente);

		if (!cliente) {
			return res.satus(404).json({
				message: "Cliente não encontrado",
			});
		}

		const pedido = pedidoRepository.create({
			descricao,
			total,
			status: PedidoStatus.PENDENTE,
			cliente,
		});

		await pedidoRepository.save(pedido);

		return res.status(201).json(pedido);
	}
}
