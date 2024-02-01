import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly username: string;
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly phoneNumber: string;
  @IsString()
  readonly skillsets: string[];
  @IsString()
  readonly hobby: string;
}
