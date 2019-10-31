import { Transform } from 'class-transformer';
import { FindOneOptions } from './find-one-options.param';
import { Order } from '../enums';

export class FindManyOptions<T1, T2> extends FindOneOptions<T1, T2> {

  filter?: string;

  page?: number;

  limit?: number | 'all';

  @Transform(value => value ? `${value.propertyName} ${value.sortOrder}` : undefined, { toClassOnly: true })
  order?: {
    propertyName: keyof T1;
    sortOrder: Order;
  };
}
