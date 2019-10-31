import { Type } from 'class-transformer';
import { Meta } from './meta.model';
import { Tag } from './tag.model';

export class TagResponse {

  @Type(() => Tag)
  tags: Tag[];
  meta?: Meta;
}
