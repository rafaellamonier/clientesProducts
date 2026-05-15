import { z } from "zod";
import { PedidoStatus } from "../entities/Pedido";

export const updatePedidoSchema = z.object({
	descricao: z.string("Descrição deve ser um texto").min(1, "Descrição é obrigatória"),
	total: z.number("Total deve ser um número").positive("Total deve ser maior que zero"),
	status: z
		.enum(Object.values(PedidoStatus) as [string, ...string[]], {
			message: "Status inválido. Use: PENDING, PAID ou CANCELED",
		})
		.transform((val) => val as PedidoStatus),
});
