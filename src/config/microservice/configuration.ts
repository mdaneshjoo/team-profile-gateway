import { registerAs } from '@nestjs/config';

export default registerAs('KAFKA', () => ({
  BROKERS: process.env.KAFKA_BROKERS,
}));
