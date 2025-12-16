import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Indicamos a configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Blog Pessoal')
    .setDescription('Projeto Blog Pessoal')
    .setContact("Tayene Ramires", "https://github.com/TayeneRamires", "tayene000@gmail.com")
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  // Ajustando o Fuso Horário do BD
  process.env.TZ = '-03:00';

  // Aplicando os recursos de validação
  app.useGlobalPipes(new ValidationPipe());

  // Habilitando o CORS do projeto - controla quem pode acessar a API
  app.enableCors();

  // Indico qual porta o projeto está sendo executado
  await app.listen(4000);
}

bootstrap();
