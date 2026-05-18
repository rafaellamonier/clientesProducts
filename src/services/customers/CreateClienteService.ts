import { AppDataSource } from "../../database/data-source";
import { Cliente } from "../../entities/Cliente";

interface IRequest {
	nome: string;
	telefone: string;
	email: string;
}

export class CreateClienteService {
	async execute({ nome, telefone, email }: IRequest) {
		const clienteRepository = AppDataSource.getRepository(Cliente);

		const emailAlreadyExists = await clienteRepository.findOne({
			where: {
				email,
			},
		});

		if (emailAlreadyExists) {
			throw new Error("Email já cadastrado");
		}

		const cliente = clienteRepository.create({
			nome,
			telefone,
			email,
		});

		await clienteRepository.save(cliente);

		return cliente;
	}
}
