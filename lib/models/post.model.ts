import { Type } from 'class-transformer';
import { Tag } from './tag.model';
import { Author } from './author.model';
import { Visibility } from '../enums';

// tslint:disable:variable-name
export class Post {

  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  comment_id?: string;
  feature_image?: string;
  featured: boolean;
  visibility: Visibility;
  @Type(() => Date)
  created_at: Date;
  @Type(() => Date)
  updated_at?: Date;
  @Type(() => Date)
  published_at: Date;
  custom_excerpt?: string;
  codeinjection_head?: string;
  codeinjection_foot?: string;
  custom_template?: string;
  canonical_url?: string;
  url: string;
  excerpt: string;
  reading_time: number;
  og_image?: string;
  og_title?: string;
  og_description?: string;
  twitter_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  meta_title?: string;
  meta_description?: string;
  @Type(() => Tag)
  tags?: Tag[];
  @Type(() => Author)
  authors?: Author[];
  primary_author?: Author;
  primary_tag?: Tag;

  hasFeatureImage(): boolean {
    return this.feature_image != null;
  }
}
