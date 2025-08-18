import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator'

export class CreatePlayerDto {
  @IsNotEmpty()
  @MaxLength(32, {
    message:
      'The firstname field must be less than or equal to 32 characters, but actual is $value',
  })
  @MinLength(3, {
    message:
      'The firstname field must have at least 3 characters, but actual is $value',
  })
  firstname: string

  @IsNotEmpty()
  @MaxLength(32, {
    message:
      'The lastname field must be less than or equal to 32 characters, but actual is $value',
  })
  @MinLength(3, {
    message:
      'The lastname field must have at least 3 characters, but actual is $value',
  })
  lastname: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^\+?[0-9]{10,}$/, { message: 'Invalid phone format.' })
  phoneNumber: string
}
