import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class TipoUsuarioDto {

    @IsOptional()
    @IsNumber()
    @IsPositive()
    id?: number;

    @IsNotEmpty()
    @IsNumber()
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

    @IsString()
    correo: string;

    @IsString()
    celular: string;

    @IsString()
    telefono: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    estado: number;
}