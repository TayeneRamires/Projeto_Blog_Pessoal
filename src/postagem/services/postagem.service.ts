import { Injectable } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable() //Indica que a classe é de serviço e pode ser inserida/injetada em outras classes
export class PostagemService{


    //Iniciando ferramentas para a classe de Serviço
    constructor(

          @InjectRepository(Postagem)
          private postagemRepository: Repository<Postagem>

    ) { }


     async findAll(): Promise<Postagem[]> { // async é uma função que ela me promete que vai trazer aquela informação, ela faz isso para não travar meu banco de dados

        return await this.postagemRepository.find()

     }
}