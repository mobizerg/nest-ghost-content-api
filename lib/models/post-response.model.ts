import { Type } from 'class-transformer';
import { Post } from './post.model';
import { Meta } from './meta.model';

export class PostResponse {

  @Type(() => Post)
  posts: Post[];
  meta?: Meta;
}
