import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

export interface GhostContentApiModuleOptions {
  name?: string;
  url: string;
  key: string;
  version: string;
}

export interface GhostContentApiOptionsFactory {
  createGhostContentApiOptions(name?: string): Promise<GhostContentApiModuleOptions> | GhostContentApiModuleOptions;
}

export interface GhostContentApiModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  name?: string;
  useExisting?: Type<GhostContentApiOptionsFactory>;
  useClass?: Type<GhostContentApiOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<GhostContentApiModuleOptions> | GhostContentApiModuleOptions;
  inject?: any[];
}
