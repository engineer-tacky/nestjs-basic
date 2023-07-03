import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  readonly name: string;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
