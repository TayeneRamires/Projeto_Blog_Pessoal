import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Tema } from "../../temas/entities/tema.entity";

@Entity({ name: "tb_postagens" })   // Indicando que a classe é uma Entitidade/Model
export class Postagem {

    @PrimaryGeneratedColumn()   // Chave Primária e Auto Incremental
    id: number;

    @IsNotEmpty()   // Decorator usado para como Validador de Objetos no corpo da Requisição
    @Column({ length: 100, nullable: false })   // Tamanho Máximo: 100 | Regra do MySQL - NOT NULL
    titulo: string;

    @IsNotEmpty()   // Validador de Objeto
    @Column({ length: 1000, nullable: false })   // Tamanho Máximo: 1000 | Regra do MySQL - NOT NULL
    texto: string;

    @UpdateDateColumn() // Indica que o campo será gerenciado pelo BD
    data: Date;

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

}