"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaveController = void 0;
const common_1 = require("@nestjs/common");
const wave_service_1 = require("./wave.service");
let WaveController = exports.WaveController = class WaveController {
    constructor(waveService) {
        this.waveService = waveService;
    }
    getWave() {
        return this.waveService.findAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WaveController.prototype, "getWave", null);
exports.WaveController = WaveController = __decorate([
    (0, common_1.Controller)('wave'),
    __metadata("design:paramtypes", [wave_service_1.WaveService])
], WaveController);
//# sourceMappingURL=wave.controller.js.map