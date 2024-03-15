import { Module } from '@nestjs/common';
import { TipoUsuarioController } from './tipo_usuario.controller';
import { TipoUsuarioService } from './tipo_usuario.service';

@Module({
  controllers: [TipoUsuarioController],
  providers: [TipoUsuarioService]
})
export class TipoUsuarioModule {}
