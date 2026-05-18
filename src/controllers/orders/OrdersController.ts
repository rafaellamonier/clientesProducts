import { Request, Response, NextFunction } from "express";
import { createPedidoSchema } from "../../schemas/createPedidoSchema";
import { CreatePedidoService } from "../../services/orders/CreatePedidoService";
import { DeletePedidoService } from "../../services/orders/DeletePedidoService";
import { GetPedidoService } from "../../services/orders/GetPedidoService";
import { ListPedidosByClienteService } from "../../services/orders/ListPedidosByClienteService";
import { ListPedidosService } from "../../services/orders/ListPedidosService";
import { SearchPedidosService } from "../../services/orders/SearchPedidosService";
import { UpdatePedidoService } from "../../services/orders/UpdatePedidoService";
import { updatePedidoSchema } from "../../schemas/updatePedidoSchema";
import { PedidoStatus } from "../../entities/Pedido";

export const CreatePedidoController = () => {
	async function handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { descricao, total, cliente_id } = createPedidoSchema.parse(req.body);

			const createPedidoService = new CreatePedidoService();

			const pedido = await createPedidoService.execute({ descricao, total, cliente_id });

			return res.status(201).json(pedido);
		} catch (error) {
			next(error);
		}
	}

	return { handle };
}

export const DeletePedidoController = () => {
	async function handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const deletePedidoService = new DeletePedidoService();

			await deletePedidoService.execute({
				id: Number(id),
			});

			return res.status(204).send();
		} catch (error) {
			next(error);
		}
	}

	return { handle };
}

export const GetPedidoController = () => {
	async function handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const getPedidoService = new GetPedidoService();

			const pedido = await getPedidoService.execute({ id: Number(id) });

			return res.json(pedido);
		} catch (error) {
			next(error);
		}
	}

	return { handle };
}

export const ListPedidosByClienteController = () => {
	async function handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const listPedidosByClienteService = new ListPedidosByClienteService();

			const pedidos = await listPedidosByClienteService.execute({ clienteId: Number(id) });

			return res.json(pedidos);
		} catch (error) {
			next(error);
		}
	}

	return { handle };
}

export const ListPedidosController = () => {
	async function handle(req: Request, res: Response, next: NextFunction) {
		try {
			const listPedidosService = new ListPedidosService();

			const pedidos = await listPedidosService.execute();

			return res.json(pedidos);
		} catch (error) {
			next(error);
		}
	}

	return { handle };
}

export const SearchPedidosController = () => {
	async function handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { status, minTotal, maxTotal, startDate, endDate } = req.query;

			const searchPedidosService = new SearchPedidosService();

			const pedidos = await searchPedidosService.execute({
				status: status as PedidoStatus | undefined,
				minTotal: minTotal ? Number(minTotal) : undefined,
				maxTotal: maxTotal ? Number(maxTotal) : undefined,
				startDate: startDate as string | undefined,
				endDate: endDate as string | undefined,
			});

			return res.json(pedidos);
		} catch (error) {
			next(error);
		}
	}

	return { handle };
}

export const UpdatePedidoController = () => {
	async function handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;

			const validatedData = updatePedidoSchema.parse(req.body);

			const updatePedidoService = new UpdatePedidoService();

			const pedido = await updatePedidoService.execute({
				id: Number(id),
				...validatedData,
			});

			return res.json(pedido);
		} catch (error) {
			next(error);
		}
	}

	return { handle };
}
