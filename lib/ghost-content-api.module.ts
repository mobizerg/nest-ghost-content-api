import { DynamicModule, Module } from '@nestjs/common';
import { GhostContentApiModuleOptions, GhostContentApiModuleAsyncOptions } from './interfaces';
import { GhostContentApiCoreModule } from './ghost-content-api-core.module';

@Module({})
export class GhostContentApiModule {

  static register(options: GhostContentApiModuleOptions): DynamicModule {
    return {
      module: GhostContentApiModule,
      imports: [GhostContentApiCoreModule.register(options)],
    };
  }

  static registerAsync(options: GhostContentApiModuleAsyncOptions): DynamicModule {
    return {
      module: GhostContentApiModule,
      imports: [GhostContentApiCoreModule.registerAsync(options)],
    };
  }
}
