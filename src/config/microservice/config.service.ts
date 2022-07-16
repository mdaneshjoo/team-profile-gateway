import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MicroServiceConfigService {
  constructor(private configService: ConfigService) {}

  get brokers(): Array<string> {
    return this.configService.get<string>('KAFKA.BROKERS').split(',');
  }
}
