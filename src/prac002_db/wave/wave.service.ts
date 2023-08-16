import { Inject, Injectable } from '@nestjs/common';
import { tb_wave } from '../entity/tb_wave';

@Injectable()
export class WaveService {
  constructor(
    @Inject('WAVE_REPOSITORY')
    private waveRepository: typeof tb_wave, // private readonly sequelize: Sequelize,
  ) {}

  async findAll(): Promise<tb_wave[]> {
    return this.waveRepository.findAll<tb_wave>();
  }
}
