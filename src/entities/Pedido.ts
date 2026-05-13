import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { Cliente } from "./Cliente";

export enum PedidoStatus {
	PENDENTE = "pendente",
	CANCELADO = "cancelado",
	PAGO = "pago",
}

@Entity("pedidos")
export class Pedido {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	descricao: string;

	@Column({
		type: "decimal",
	})
	total: number;

	@Column({
		type: "enum",
		enum: PedidoStatus,
		default: PedidoStatus.PENDENTE,
	})
	status: PedidoStatus;

	@ManyToOne(
		() => Cliente,
		(cliente) => cliente.pedidos,
		{
			onDelete: "CASCADE",
		},
	)
	@JoinColumn({
		name: "cliente_id",
	})
	cliente: Cliente;

	@CreateDateColumn()
	created_at: Date;
}
