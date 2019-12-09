# NestJS

## Midddleware

### New middleware

`nest g mi Logger`

### Applying middleware

- AppModule implements NestModule

```javascript
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer .apply(LoggerMiddleware) .forRoutes('cats';
  }
}
```

- Use Globale Middleware
  main.ts: app.use(logger)

## Pipe

### 内置 Pipe

- ValidationPipe
  必须先安装 class-validator and class-transformer
- Use Global Pipe

## Dto (Data Transfer Object)

Request payloads
使用 class 定义

## Entity(Model)

使用 interface 定义

## Controller

@Get @Post @Redirect @HttpCode @Header @Param @Body
return Promise

## Database

### TypeORM Intergration

ORM(Object Relational Mapper)

- install dependencies

`npm install --save @nestjs/typeorm typeorm mysql`

- import the TypeOrmModule into the root AppModule

```javascript
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
})

```

或者将数据库配置放到 ormconfig.json 中

## Authentication

`$ npm install --save @nestjs/passport passport passport-local`

`$ npm install --save-dev @types/passport-local`
