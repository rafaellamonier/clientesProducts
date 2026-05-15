import { AppDataSource } from "../../database/data-source";
import { Pedido, PedidoStatus } from "../../entities/Pedido";
import { Cliente } from "../../entities/Cliente";

interface IRequest {
	descricao: string;
	total: number;
	cliente_id: number;
}

export class CreatePedidoService {
	async execute({ descricao, total, cliente_id }: IRequest) {
		const clienteRepository = AppDataSource.getRepository(Cliente);
		const pedidoRepository = AppDataSource.getRepository(Pedido);

		const cliente = await clienteRepository.findOne({
			where: { id: cliente_id },
		});

		if (!cliente) {
			throw new Error("Cliente não encontrado");
		}

		const pedido = pedidoRepository.create({
			descricao,
			total,
				status: PedidoStatus.PENDING,
			cliente,
		});

		await pedidoRepository.save(pedido);

		const savedPedido = await pedidoRepository.findOne({
			where: { id: pedido.id },
		});

		return savedPedido;
	}
}
