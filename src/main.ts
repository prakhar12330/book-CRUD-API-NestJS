import { NestApplication, NestFactory } from '@nestjs/core';
import { NextFunction,Request,Response } from 'express';
import { AppModule } from './app.module';


function globalMiddlewareFirst(req:Request,res:Response,next:NextFunction)
{
       console.log('This is the global middleware number:1');
       next();
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddlewareFirst);
  await app.listen(3000);
}
bootstrap();
