import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './response/response.interceptor';
import { ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { CustomLoggerService } from '@/src/utils/custom-logger';

async function bootstrap() {
  // LOGGER
  const customLoggerService = new CustomLoggerService();
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(customLoggerService.createLoggerConfig),
  });
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  app.useGlobalInterceptors(new ResponseInterceptor());
  // CORS
  app.enableCors();
  // SWAGGER
  const config = new DocumentBuilder().setTitle('API Docs').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(port);
}
bootstrap();
