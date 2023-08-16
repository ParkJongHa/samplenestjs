"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waveProviders = void 0;
const tb_wave_1 = require("../entity/tb_wave");
exports.waveProviders = [
    {
        provide: 'WAVE_REPOSITORY',
        useValue: tb_wave_1.tb_wave,
    },
];
//# sourceMappingURL=wave.providers.js.map