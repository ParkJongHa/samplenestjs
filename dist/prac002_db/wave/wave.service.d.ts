import { tb_wave } from '../entity/tb_wave';
export declare class WaveService {
    private waveRepository;
    constructor(waveRepository: typeof tb_wave);
    findAll(): Promise<tb_wave[]>;
}
