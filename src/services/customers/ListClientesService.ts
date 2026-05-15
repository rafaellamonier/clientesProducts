import { AppDataSource } from "../../database/data-source";
import { Cliente } from "../../entities/Cliente";

export class ListClientesService {
	async execute() {
		const clienteRepository = AppDataSource.getRepository(Cliente);

		const clientes = await clienteRepository.find({
			relations: {
				pedidos: true,
			},
		});

		return clientes;
	}
}
