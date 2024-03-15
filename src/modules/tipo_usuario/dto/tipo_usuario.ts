import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class TipoUsuarioDto {

    @IsOptional()
    @IsNumber()
    @IsPositive()
    id?: number;

    @IsNotEmpty()
    @IsString()
    tipo_usuario: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    estado: number;
}