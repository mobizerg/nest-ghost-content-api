import { Transform } from 'class-transformer';
import { ContentFormat } from '../enums';

export class FindOneOptions<T1, T2> {

  @Transform(value => value ? (Array.isArray(value) ? value.join(',') : value) : undefined, { toClassOnly: true })
  include?: T2 | T2[];

  fields?: [keyof T1];

  formats?: ContentFormat[];
}
