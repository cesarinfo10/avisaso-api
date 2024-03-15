import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoUsuarioModule } from './modules/tipo_usuario/tipo_usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: null,
      database: 'avisaso_db',
      entities: [],
      synchronize: false,
    }),
    TipoUsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
