import { QueueOptions } from 'bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SharedBullConfigurationFactory } from '@nestjs/bull';

import { BullConfig } from '../interfaces/BullConfig';

@Injectable()
export class BullConfigService implements SharedBullConfigurationFactory {
  constructor(private configService: ConfigService) {}

  public createSharedConfiguration(): QueueOptions {
    const config: BullConfig = this.configService.get<BullConfig>(
      BullConfig.CONFIG_KEY,
      {
        infer: true,
      },
    );

    return config;
  }
}