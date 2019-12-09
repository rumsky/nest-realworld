import { IsString, IsInt } from 'class-validator';
export class CreateProductDto {
  readonly title: string;
  readonly description: string;
  @IsInt()
  readonly price: number;
}
