import { AppDataSource } from "../../database/data-source";
import { Pedido } from "../../entities/Pedido";

interface IRequest {
	id: number;
}

export class GetPedidoService {
	async execute({ id }: IRequest) {
		const pedidoRepository = AppDataSource.getRepository(Pedido);

		const pedido = await pedidoRepository.findOne({
			where: { id },
			relations: {
				cliente: true,
			},
		});

		if (!pedido) {
			throw new Error("Pedido não encontrado");
		}

		return pedido;
	}
}
