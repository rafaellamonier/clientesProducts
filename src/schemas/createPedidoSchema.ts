import { z } from "zod";

export const createPedidoSchema = z.object({
	descricao: z.string("Descrição deve ser um texto").min(1, "Descrição é obrigatória"),
	total: z.number("Total deve ser um número").positive("Total deve ser maior que zero"),
	cliente_id: z.number("ID do cliente deve ser um número").int("ID do cliente inválido"),
});
