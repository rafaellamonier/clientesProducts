import { AppDataSource } from "../../database/data-source";
import { Pedido, PedidoStatus } from "../../entities/Pedido";

interface IRequest {
	status?: PedidoStatus;
	minTotal?: number;
	maxTotal?: number;
	startDate?: string;
	endDate?: string;
}

export class SearchPedidosService {
	async execute({ status, minTotal, maxTotal, startDate, endDate }: IRequest) {
		const pedidoRepository = AppDataSource.getRepository(Pedido);

		const query = pedidoRepository
			.createQueryBuilder("pedido")
			.leftJoinAndSelect("pedido.cliente", "cliente");

		if (status) {
			query.andWhere("pedido.status = :status", { status });
		}

		if (minTotal !== undefined) {
			query.andWhere("pedido.total >= :minTotal", { minTotal });
		}

		if (maxTotal !== undefined) {
			query.andWhere("pedido.total <= :maxTotal", { maxTotal });
		}

		if (startDate) {
			query.andWhere("pedido.created_at >= :startDate", {
				startDate: new Date(startDate),
			});
		}

		if (endDate) {
			query.andWhere("pedido.created_at <= :endDate", {
				endDate: new Date(endDate),
			});
		}

		query.orderBy("pedido.created_at", "DESC");

		const pedidos = await query.getMany();

		return pedidos;
	}
}
