import { Type } from 'class-transformer';
import { Post } from './post.model';
import { Meta } from './meta.model';

export class PageResponse {

  @Type(() => Post)
  pages: Post[];
  meta?: Meta;
}
