import { AppDataSource } from "../../database/data-source";
import { Cliente } from "../../entities/Cliente";

interface IRequest {
	id: number;
	nome: string;
	telefone: string;
	email: string;
}

export class UpdateClienteService {
	async execute({ id, nome, telefone, email }: IRequest) {
		const clienteRepository = AppDataSource.getRepository(Cliente);

		const cliente = await clienteRepository.findOne({
			where: {
				id,
			},
		});

		const emailAlreadyExists = await clienteRepository.findOne({
			where: {
				email,
			},
		});

		if (emailAlreadyExists && emailAlreadyExists.id !== id) {
			throw new Error("Email já cadastrado");
		}

		if (!cliente) {
			throw new Error("Cliente não encontrado");
		}

		cliente.nome = nome;
		cliente.telefone = telefone;
		cliente.email = email;

		await clienteRepository.save(cliente);

		return cliente;
	}
}
