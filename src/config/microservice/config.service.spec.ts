import { Test, TestingModule } from '@nestjs/testing';
import { MicroServiceConfigService } from './config.service';

describe('ConfigService', () => {
  let service: MicroServiceConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicroServiceConfigService],
    }).compile();

    service = module.get<MicroServiceConfigService>(MicroServiceConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
