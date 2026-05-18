import { Request, Response, NextFunction } from "express";
import { CreateClienteService } from "../../services/customers/CreateClienteService";
import { createClienteSchema } from "../../schemas/createClienteSchema";
import { DeleteClienteService } from "../../services/customers/DeleteClienteService";
import { ListClienteByIdService } from "../../services/customers/ListClienteByIdService";
import { ListClientesService } from "../../services/customers/ListClientesService";
import { UpdateClienteService } from "../../services/customers/UpdateClienteService";
import { updateClienteSchema } from "../../schemas/updateClienteSchema";

export const CreateClienteController = () => {
	async function handle(req: Request, res: Response, next: NextFunction) {
		try {
			console.log('teste req.body', req.body);
			const validatedData = createClienteSchema.parse(req.body);

			const createClienteService = new CreateClienteService();

			const cliente = await createClienteService.execute(validatedData);

			return res.status(201).json(cliente);
		} catch (error) {
			next(error);
		}
	}

	return { handle };
}

export const DeleteClienteController = () => {
	async function handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const deleteClienteService = new DeleteClienteService();

			await deleteClienteService.execute({
				id: Number(id),
			});

			return res.status(204).send();
		} catch (error) {
			next(error);
		}
	}

	return { handle };
}

export const ListClienteByIdController = () => {
	async function handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const listClienteByIdService = new ListClienteByIdService();

			const cliente = await listClienteByIdService.execute({ id: Number(id) });

			return res.json(cliente);
		} catch (error) {
			next(error);
		}
	}

	return { handle };
}

export const ListClientesController = () => {
	async function handle(req: Request, res: Response, next: NextFunction) {
		try {
			const listClientesService = new ListClientesService();

			const clientes = await listClientesService.execute();

			return res.json(clientes);
		} catch (error) {
			next(error);
		}
	}

	return { handle };
}

export const UpdateClienteController = () => {
	async function handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const validatedData = updateClienteSchema.parse(req.body);

			const updateClienteService = new UpdateClienteService();

			const cliente = await updateClienteService.execute({
				id: Number(id),
				...validatedData,
			});

			return res.json(cliente);
		} catch (error) {
			next(error);
		}
	}

	return { handle };
}