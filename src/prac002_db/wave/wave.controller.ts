import { Controller, Get } from '@nestjs/common';
import { WaveService } from './wave.service';

@Controller('wave')
export class WaveController {
  constructor(private waveService: WaveService) {}

  @Get()
  getWave() {
    return this.waveService.findAll();
  }
}
