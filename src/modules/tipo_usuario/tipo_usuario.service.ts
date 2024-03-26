import { Injectable } from '@nestjs/common';
import { CONEXION } from 'src/config/conexion';
import { TipoUsuarioDto } from './dto/tipo_usuario';

@Injectable()
export class TipoUsuarioService {

    async selectAll(): Promise<any> {

        return new Promise((res, rej) => {
          CONEXION.execute("select * from estado", (e, results) => {
                if (e) throw e;
                res(results);
            });
        })
    }

    async insertTipo(tipoUser: TipoUsuarioDto) {

        return new Promise((res, rej) => {
          CONEXION.execute("insert into tipo_usuario (tipo_usuario, estado) values('"+tipoUser.tipo_usuario+"',"+tipoUser.estado+")", (e, results) => {
                if (e) throw e;
                res(1);
            });
        })
    }
}
