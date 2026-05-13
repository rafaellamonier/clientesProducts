import { z } from "zod";

export const createClienteSchema = z.object({
	nome: z
		.string("Nome deve ser um texto")
		.min(3, "Nome deve ter no mínimo 3 caracteres"),
	telefone: z.string("Telefone deve ser um texto"),
	email: z.string("Email deve ser um texto").email("Email inválido"),
});
