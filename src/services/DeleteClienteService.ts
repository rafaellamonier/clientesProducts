import { AppDataSource } from "../database/data-source";
import { Cliente } from "../entities/Cliente";

interface IRequest {
	id: number;
}

export class DeleteClienteService {
	async execute({ id }: IRequest) {
		const clienteRepository = AppDataSource.getRepository(Cliente);

		const cliente = await clienteRepository.findOne({
			where: {
				id,
			},
		});

		if (!cliente) {
			throw new Error("Cliente não encontrado");
		}

		await clienteRepository.remove(cliente);
	}
}
