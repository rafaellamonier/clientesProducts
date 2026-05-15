import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	JoinColumn,
	RelationId,
} from "typeorm";
import { Cliente } from "./Cliente";

export enum PedidoStatus {
	PENDING = "PENDING",
	CANCELED = "CANCELED",
	PAID = "PAID",
}

@Entity("pedidos")
export class Pedido {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	descricao!: string;

	@Column({
		type: "decimal",
	})
	total!: number;

	@Column({
		type: "enum",
		enum: PedidoStatus,
		default: PedidoStatus.PENDING,
	})
	status!: PedidoStatus;

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
	cliente: Cliente | undefined;

	@RelationId((pedido: Pedido) => pedido.cliente)
	customerId!: number;

	@CreateDateColumn()
	created_at!: Date;

	@UpdateDateColumn()
	updated_at!: Date;
}
