import { Type } from 'class-transformer';
import { Meta } from './meta.model';
import { Author } from './author.model';

export class AuthorResponse {

  @Type(() => Author)
  authors: Author[];
  meta?: Meta;
}
