import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

import { QUEUES } from 'src/shared/queues';
import { DiscordService } from './discord.service';
import { DiscordProcessor } from './discord.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: QUEUES.DISCORD,
      // https://discord.com/developers/docs/topics/rate-limits
      limiter: {
        max: 50, // max 50 req per sec
        duration: 1000,
      },
    }),
  ],
  providers: [DiscordProcessor, DiscordService],
})
export class DiscordModule {}
