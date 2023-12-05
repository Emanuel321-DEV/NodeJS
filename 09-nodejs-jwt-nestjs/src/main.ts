import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes( // Força que uma excecao ocorra quando der um err, assim podemos ver melhor os dados do err no insomnia por ex
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  ); 
  
  
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Authentication NestJs')
    .setDescription('Example JWT Authentication with NestJS')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
