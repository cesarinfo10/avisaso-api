import { Body, Controller, Get, Post } from '@nestjs/common';
import { TipoUsuarioService } from './tipo_usuario.service';
import { TipoUsuarioDto } from './dto/tipo_usuario';

@Controller('api/v1/tipo-usuario')
export class TipoUsuarioController {

    constructor(private readonly tipoUsuario: TipoUsuarioService) {}

    @Get()
    getHello(){
        return this.tipoUsuario.selectAll();
    }

    @Post()
    createProduct(@Body() tipoUser: TipoUsuarioDto){
        return this.tipoUsuario.insertTipo(tipoUser);
    }
}
