import { WaveService } from './wave.service';
export declare class WaveController {
    private waveService;
    constructor(waveService: WaveService);
    getWave(): Promise<import("../entity/tb_wave").tb_wave[]>;
}
