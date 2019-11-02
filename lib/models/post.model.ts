import { Expose, Type } from 'class-transformer';
import { format, formatDistanceStrict } from 'date-fns';
import { Tag } from './tag.model';
import { Author } from './author.model';
import { Visibility } from '../enums';
import { seoDescription, seoTitle } from '../ghost-content-api.helper';

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

  @Expose({ toPlainOnly: true })
  blogUrl(): string {
    return `/blog/${this.slug}/`;
  }

  @Expose({ toPlainOnly: true })
  publishedDate(): string {
    return format(this.published_at, 'MMM dd, yyyy');
  }

  @Expose({ toPlainOnly: true })
  publishedBefore(): string {
    return formatDistanceStrict(new Date(), this.published_at, { addSuffix: true });
  }

  hasFeatureImage(): boolean {
    return this.feature_image != null;
  }

  isPublic(): boolean {
    return this.visibility === Visibility.PUBLIC;
  }

  isPrivate(): boolean {
    return this.visibility === Visibility.PRIVATE;
  }

  metaTitle(): string {
    return this.meta_title ? this.meta_title : seoTitle(this.title);
  }

  metaDescription(): string {
    return this.meta_description ? this.meta_description : seoDescription(this.excerpt);
  }

  ogType(): string {
    return 'article';
  }

  ogTitle(): string {
    return this.og_title ? this.og_title : seoTitle(this.title);
  }

  ogDescription(): string {
    return this.og_description ? this.og_description : seoDescription(this.excerpt);
  }

  ogImage(defaultImageUrl: string): string {
    return this.og_image ? this.og_image : defaultImageUrl;
  }

  twitterCard(): string {
    return 'summary_large_image';
  }

  twitterTitle(): string {
    return this.twitter_title ? this.twitter_title : seoTitle(this.title);
  }

  twitterDescription(): string {
    return this.twitter_description ? this.twitter_description : seoDescription(this.excerpt);
  }

  twitterImage(defaultImageUrl: string): string {
    return this.twitter_image ? this.twitter_image : defaultImageUrl;
  }

  publishedDateAs(pattern: string): string {
    return format(this.published_at, pattern);
  }
}
