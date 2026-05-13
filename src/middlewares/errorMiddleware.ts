import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorMiddleware(
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	if (error instanceof ZodError) {
		return res.status(400).json({
			message: "Erro de validação",
			errors: error.issues.map((issue) => ({
				field: issue.path[0],
				message: issue.message,
			})),
		});
	}

	return res.status(400).json({
		message: error.message,
	});
}
