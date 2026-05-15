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

		console.log("SERVICE");

		const emailAlreadyExists = await clienteRepository.findOne({
			where: {
				email,
			},
		});

		console.log("teste email", email);
		console.log("teste emailAlreadyExists", emailAlreadyExists);

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
