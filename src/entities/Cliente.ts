import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from "typeorm";
import { Pedido } from "./Pedido";

@Entity("clientes")
export class Cliente {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	nome!: string;

	@Column()
	telefone!: string;

	@Column({
		unique: true,
	})
	email!: string;

	@CreateDateColumn()
	created_at!: Date;

	@UpdateDateColumn()
	updated_at!: Date;

	@OneToMany(
		() => Pedido,
		(pedido) => pedido.cliente,
	)
	pedidos!: Pedido[];
}
