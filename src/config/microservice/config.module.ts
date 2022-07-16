import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MicroServiceConfigService } from './config.service';
import configuration from './configuration';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        KAFKA_BROKERS: Joi.string()
          .required()
          .messages({ 'any.required': 'KAFKA_BROKERS is required in ENV' }),
      }),
    }),
  ],
  providers: [ConfigService, MicroServiceConfigService],
  exports: [ConfigService, MicroServiceConfigService],
})
export class MicroServiceConfigModule {}
