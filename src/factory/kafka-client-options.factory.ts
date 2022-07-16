import { ClientProvider, KafkaOptions, Transport } from '@nestjs/microservices';
import { MicroServiceConfigService } from '../config/microservice/config.service';
import { BaseConfigFactory, ConfigModel } from './base.config.factory';

export class KafkaClientProviderOptionsFactory extends BaseConfigFactory<
  Promise<ClientProvider> | ClientProvider
> {
  constructor(
    public configService: MicroServiceConfigService,
    private clientId: string,
    private groupId: string,
  ) {
    super();
  }

  factory(): ConfigModel<Promise<ClientProvider> | ClientProvider> {
    return new KafkaClientProviderOptions(
      this.configService,
      this.clientId,
      this.groupId,
    );
  }
}

export class KafkaClientProviderOptions
  implements ConfigModel<Promise<ClientProvider> | ClientProvider>
{
  constructor(
    private configService: MicroServiceConfigService,
    private clientId: string,
    private groupId: string,
  ) {}

  config(): Promise<KafkaOptions> | KafkaOptions {
    return {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: this.clientId,
          brokers: this.configService.brokers,
        },
        consumer: { groupId: this.groupId },
      },
    };
  }
}
