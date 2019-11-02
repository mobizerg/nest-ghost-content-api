import { Inject, Injectable } from '@nestjs/common';
import * as GhostContentAPI from '@tryghost/content-api';
import { plainToClass, plainToClassFromExist } from 'class-transformer';
import { GHOST_CONTENT_API_MODULE_OPTIONS } from './ghost-content-api.constant';
import { GhostContentApiModuleOptions } from './interfaces';
import { FindManyOptions, FindOneOptions } from './params';
import { Author, AuthorResponse, Post, PostResponse, Tag, TagResponse } from './models';
import { AuthorData, PostData, TagData } from './enums';

@Injectable()
export class GhostContentApiService {

  private readonly contentApi: GhostContentAPI;

  constructor(@Inject(GHOST_CONTENT_API_MODULE_OPTIONS)
              private readonly options: GhostContentApiModuleOptions) {

    if (!options) throw new Error('Ghost config is not defined');
    if (!options.key) throw new Error('Ghost content api key is not defined');
    if (!options.url) throw new Error('Ghost content api url is not defined');
    if (!options.version) throw new Error('Ghost content api version is not defined');

    this.contentApi = new GhostContentAPI({
      url: options.url,
      version: options.version,
      key: options.key,
    });
  }

  // Posts

  async findPosts(params?: FindManyOptions<Post, PostData>): Promise<PostResponse> {
    if (params) params = plainToClassFromExist(new FindManyOptions<Post, PostData>(), params);
    const response = await this.contentApi.posts.browse(params);
    return plainToClass(PostResponse, { posts: response, meta: response.meta });
  }

  async findPostById(id: string, params?: FindOneOptions<Post, PostData>): Promise<Post> {
    if (params) params = plainToClassFromExist(new FindOneOptions<Post, PostData>(), params);
    const response = await this.contentApi.posts.read({ id }, params);
    return plainToClass(Post, response);
  }

  async findPostBySlug(slug: string, params?: FindOneOptions<Post, PostData>): Promise<Post> {
    if (params) params = plainToClassFromExist(new FindOneOptions<Post, PostData>(), params);
    const response = await this.contentApi.posts.read({ slug }, params);
    return plainToClass(Post, response);
  }

  // Pages

  async findPages(params?: FindManyOptions<Post, PostData>): Promise<PostResponse> {
    if (params) params = plainToClassFromExist(new FindManyOptions<Post, PostData>(), params);
    const response = await this.contentApi.pages.browse(params);
    return plainToClass(PostResponse, { posts: response, meta: response.meta });
  }

  async findPageById(id: string, params?: FindOneOptions<Post, PostData>): Promise<Post> {
    if (params) params = plainToClassFromExist(new FindOneOptions<Post, PostData>(), params);
    const response = await this.contentApi.pages.read({ id }, params);
    return plainToClass(Post, response);
  }

  async findPageBySlug(slug: string, params?: FindOneOptions<Post, PostData>): Promise<Post> {
    if (params) params = plainToClassFromExist(new FindOneOptions<Post, PostData>(), params);
    const response = await this.contentApi.pages.read({ slug }, params);
    return plainToClass(Post, response);
  }

  // Authors

  async findAuthors(params?: FindManyOptions<Author, AuthorData>): Promise<AuthorResponse> {
    if (params) params = plainToClassFromExist(new FindManyOptions<Author, AuthorData>(), params);
    const response = await this.contentApi.authors.browse(params);
    return plainToClass(AuthorResponse, { authors: response, meta: response.meta });
  }

  async findAuthorById(id: string, params?: FindOneOptions<Author, AuthorData>): Promise<Author> {
    if (params) params = plainToClassFromExist(new FindOneOptions<Author, AuthorData>(), params);
    const response = await this.contentApi.authors.read({ id }, params);
    return plainToClass(Author, response);
  }

  async findAuthorBySlug(slug: string, params?: FindOneOptions<Author, AuthorData>): Promise<Author> {
    if (params) params = plainToClassFromExist(new FindOneOptions<Author, AuthorData>(), params);
    const response = await this.contentApi.authors.read({ slug }, params);
    return plainToClass(Author, response);
  }

  // Tags

  async findTags(params?: FindManyOptions<Tag, TagData>): Promise<TagResponse> {
    if (params) params = plainToClassFromExist(new FindManyOptions<Tag, TagData>(), params);
    const response = await this.contentApi.tags.browse(params);
    return plainToClass(TagResponse, { tags: response, meta: response.meta });
  }

  async findTagById(id: string, params?: FindOneOptions<Tag, TagData>): Promise<Tag> {
    if (params) params = plainToClassFromExist(new FindOneOptions<Tag, TagData>(), params);
    const response = await this.contentApi.tags.read({ id }, params);
    return plainToClass(Tag, response);
  }

  async findTagBySlug(slug: string, params?: FindOneOptions<Tag, TagData>): Promise<Tag> {
    if (params) params = plainToClassFromExist(new FindOneOptions<Tag, TagData>(), params);
    const response = await this.contentApi.tags.read({ slug }, params);
    return plainToClass(Tag, response);
  }
}
