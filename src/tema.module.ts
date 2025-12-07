import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "./temas/entities/tema.entity";
import { TemaService } from "./temas/services/tema.service";
import { TemaController } from "./temas/controller/tema.controller";


@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [TemaController],
    exports: [TypeOrmModule]
})
export class TemaModule { }