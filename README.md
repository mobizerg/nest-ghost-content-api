<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  Ghost Content Api integration module for Nest.js framework.
</p>

### Installation

**Yarn**
```bash
yarn add @mobizerg/nest-ghost-content-api @tryghost/content-api
```

**NPM**
```bash
npm install @mobizerg/nest-ghost-content-api @tryghost/content-api --save
```

### Description
Ghost Content Api integration module for [Nest.js](https://github.com/nestjs/nest) based on the [Ghost Content Api](https://github.com/TryGhost/Ghost-SDK/tree/master/packages/content-api) package.

### Usage

Import the **GhostContentApiModule** in `app.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { GhostContentApiModule } from '@mobizerg/nest-ghost-content-api';

@Module({
    imports: [
        GhostContentApiModule.register(options),
    ],
})
export class AppModule {}
```
With Async
```typescript
import { Module } from '@nestjs/common';
import { GhostContentApiModule } from '@mobizerg/nest-ghost-content-api';

@Module({
    imports: [
        GhostContentApiModule.registerAsync({
            imports: [ConfigModule],
            useExisting: GhostContentApiConfigService,
        }),
    ],
})
export class AppModule {}
```

Example config file (async)
```typescript
import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';
import { GhostContentApiModuleOptions, GhostContentApiOptionsFactory } from '@mobizerg/nest-ghost-content-api';

@Injectable()
export class GhostContentApiConfigService implements GhostContentApiOptionsFactory {

  constructor(private readonly config: ConfigService) {}

  createGhostContentApiOptions(name?: string): GhostContentApiModuleOptions {
      
    return {
      name,
      url: 'https://demo.ghost.io',
      key: '22444f78447824223cefc48062',
      version: 'v3',
    };
  }
}
```

Importing inside services
```typescript
import { Injectable } from '@nestjs/common';
import { GhostContentApiService, PageResponse, PostResponse } from '@mobizerg/nest-ghost-content-api';

@Injectable()
export class BlogService {
    
      constructor(private readonly ghostContentApiService: GhostContentApiService) {}
                  
      async findPosts(): Promise<PageResponse<PostResponse>> {
          return await this.ghostContentApiService.findPosts({
             filter: 'tag:demo',
             page: query.page, 
             limit: query.limit,
             order: {
               propertyName: 'created_at',
               sortOrder: Order.ASC,
             },
           });
      }           
}
```

### License

MIT
