import { AppDataSource } from "../../database/data-source";
import { Pedido, PedidoStatus } from "../../entities/Pedido";

interface IRequest {
	id: number;
	descricao: string;
	total: number;
	status: PedidoStatus;
}

export class UpdatePedidoService {
	async execute({ id, descricao, total, status }: IRequest) {
		const pedidoRepository = AppDataSource.getRepository(Pedido);

		const pedido = await pedidoRepository.findOne({
			where: {
				id,
			},
		});

		if (!pedido) {
			throw new Error("Pedido não encontrado");
		}

		pedido.descricao = descricao;
		pedido.total = total;
		pedido.status = status;

		await pedidoRepository.save(pedido);

		return pedido;
	}
}
