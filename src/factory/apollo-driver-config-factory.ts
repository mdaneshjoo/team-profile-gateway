import { ApolloDriverConfig } from '@nestjs/apollo';
import { BaseConfigFactory, ConfigModel } from './base.config.factory';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

export class ApolloDriverConfigFactory extends BaseConfigFactory<ApolloDriverConfig> {
  constructor() {
    super();
  }

  factory(): ConfigModel<ApolloDriverConfig> {
    return new ApolloDriver();
  }
}

export class ApolloDriver implements ConfigModel<ApolloDriverConfig> {
  config(): ApolloDriverConfig {
    return {
      // debug: false,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    } as ApolloDriverConfig;
  }
}
