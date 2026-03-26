import { Test, TestingModule } from '@nestjs/testing';
import { HealthModule } from './health.module';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';

describe('HealthModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [TerminusModule],
      controllers: [HealthController],
    }).compile();
  });

  it('should compile the module', () => {
    expect(module).toBeDefined();
  });

  it('should have HealthController', () => {
    const controller = module.get<HealthController>(HealthController);
    expect(controller).toBeDefined();
  });
});
