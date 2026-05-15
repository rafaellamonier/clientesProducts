import { AppDataSource } from "../../database/data-source";
import { Pedido } from "../../entities/Pedido";
import { Cliente } from "../../entities/Cliente";

interface IRequest {
	clienteId: number;
}

export class ListPedidosByClienteService {
	async execute({ clienteId }: IRequest) {
		const clienteRepository = AppDataSource.getRepository(Cliente);

		const cliente = await clienteRepository.findOne({
			where: { id: clienteId },
		});

		if (!cliente) {
			throw new Error("Cliente não encontrado");
		}

		const pedidoRepository = AppDataSource.getRepository(Pedido);

		const pedidos = await pedidoRepository.find({
			where: { cliente: { id: clienteId } },
		});

		return pedidos;
	}
}
