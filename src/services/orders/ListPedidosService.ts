import { AppDataSource } from "../../database/data-source";
import { Pedido } from "../../entities/Pedido";

export class ListPedidosService {
	async execute() {
		const pedidoRepository = AppDataSource.getRepository(Pedido);

		const pedidos = await pedidoRepository.find({
			relations: {
				cliente: true,
			},
		});

		return pedidos;
	}
}
