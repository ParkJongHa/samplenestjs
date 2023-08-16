import { WaveService } from './wave.service';
import { waveProviders } from './wave.providers';
import { Module } from '@nestjs/common';
import { WaveController } from './wave.controller';
// import { AuthGuard } from 'src/prac003_auth/auth/auth.guard';
// import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [WaveController],
  providers: [
    WaveService,
    ...waveProviders,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
})
export class WaveModule {}
