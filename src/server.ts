import "reflect-metadata";
import { app } from "./app";
import { AppDataSource } from "./database/data-source.ts";

const PORT = 3002;

AppDataSource.initialize()
	.then(() => {
		console.log("Banco conectado");

		app.listen(PORT, () => {
			console.log(`Servidor rodando na porta ${PORT}`);
		});
	})
	.catch((error) => {
		console.error("Erro ao conectar no banco", error);
	});
