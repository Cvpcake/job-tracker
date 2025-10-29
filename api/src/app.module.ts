import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HealthController } from './controllers/health/health.controller';
import { PrismaService } from './infrastructure/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, HealthController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
