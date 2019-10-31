import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { GHOST_CONTENT_API_MODULE_OPTIONS } from './ghost-content-api.constant';
import { GhostContentApiService } from './ghost-content-api.service';
import { GhostContentApiModuleAsyncOptions, GhostContentApiModuleOptions, GhostContentApiOptionsFactory } from './interfaces';

@Global()
@Module({})
export class GhostContentApiCoreModule {

  static register(options: GhostContentApiModuleOptions): DynamicModule {
    return {
      module: GhostContentApiCoreModule,
      providers: [
        { provide: GHOST_CONTENT_API_MODULE_OPTIONS, useValue: options },
        GhostContentApiService,
      ],
      exports: [GhostContentApiService],
    };
  }

  static registerAsync(options: GhostContentApiModuleAsyncOptions): DynamicModule {
    return {
      module: GhostContentApiCoreModule,
      imports: options.imports || [],
      providers: [
        ...this.createAsyncProviders(options),
        GhostContentApiService,
      ],
      exports: [GhostContentApiService],
    };
  }

  private static createAsyncProviders(options: GhostContentApiModuleAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      { provide: options.useClass, useClass: options.useClass },
    ];
  }

  private static createAsyncOptionsProvider(options: GhostContentApiModuleAsyncOptions): Provider {
    if (options.useFactory) {
      return {
        provide: GHOST_CONTENT_API_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    return {
      provide: GHOST_CONTENT_API_MODULE_OPTIONS,
      useFactory: async (optionsFactory: GhostContentApiOptionsFactory) => await optionsFactory.createGhostContentApiOptions(options.name),
      inject: [options.useExisting || options.useClass],
    };
  }
}
