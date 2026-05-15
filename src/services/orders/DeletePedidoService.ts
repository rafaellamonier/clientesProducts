import { AppDataSource } from "../../database/data-source";
import { Pedido } from "../../entities/Pedido";

interface IRequest {
	id: number;
}

export class DeletePedidoService {
	async execute({ id }: IRequest) {
		const pedidoRepository = AppDataSource.getRepository(Pedido);

		const pedido = await pedidoRepository.findOne({
			where: { id },
		});

		if (!pedido) {
			throw new Error("Pedido não encontrado");
		}

		await pedidoRepository.remove(pedido);
	}
}
