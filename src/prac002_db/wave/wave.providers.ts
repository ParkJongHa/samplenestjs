import { tb_wave } from '../entity/tb_wave';

export const waveProviders = [
  {
    provide: 'WAVE_REPOSITORY',
    useValue: tb_wave,
  },
];
