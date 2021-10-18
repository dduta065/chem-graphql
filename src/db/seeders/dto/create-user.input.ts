import { IsAlphanumeric, IsEmail, MaxLength, MinLength } from 'class-validator';

export class CreateUserInput {
  @MinLength(3)
  @MaxLength(50)
  @IsEmail()
  email: string;

  @MinLength(3)
  @MaxLength(20)
  @IsAlphanumeric()
  password: string;

  @MinLength(3)
  @MaxLength(30)
  @IsAlphanumeric()
  firstName: string;

  @MinLength(3)
  @MaxLength(30)
  @IsAlphanumeric()
  lastName: string;
}
