import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT || 3000;

    const config = new DocumentBuilder()
        .setTitle('Organizer Service')
        .setDescription('Organizer Service API - Microservice')
        .setVersion('1.0')
        .addTag('user')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(port, () => console.log('Microservice is listening on port ' + port));
}
bootstrap();
