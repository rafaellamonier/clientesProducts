import { z } from "zod";

export const updatePedidoSchema = z.object({
	descricao: z.string(),

	total: z.number(),

	status: z.enum(["pendente", "cancelado", "pago"]),
});
