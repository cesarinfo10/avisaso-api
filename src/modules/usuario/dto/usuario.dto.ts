import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UsuarioDto {

    @IsOptional()
    @IsNumber()
    @IsPositive()
    id?: number;

    @IsNotEmpty()    
    @IsNumber()
    @IsPositive()
    tipo_usuario: number;

    @IsNotEmpty()
    @IsString()
    nombres: string;

    @IsNotEmpty()
    @IsString()
    apellidos: string;

    @IsNotEmpty()
    @IsString()
    dni: string;

    @IsNotEmpty()
    @IsString()
    correo: string;

    @IsNotEmpty()
    @IsString()
    celular: string;

    @IsString()
    telefono: string;

    @IsString()
    direccion: string;

    @IsString()
    foto_perfil: string;
    
    @IsString()
    usuario: string;

    @IsString()
    password: string;

    @IsString()
    rep_password: string;

    @IsString()
    id_notificaciones: string;

    @IsString()
    carta_presentacion: string;

    @IsString()
    estado: string;

}