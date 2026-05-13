import { z } from "zod";

export const updateClienteSchema = z.object({
	nome: z.string("Nome inválido").min(3, "Nome de ter no mínimo 3 caracteres"),
	telefone: z.string("Número de telefone inválido"),
	email: z.email("Email inválido"),
});
