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
exports.tb_wave = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let tb_wave = exports.tb_wave = class tb_wave extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.STRING(22),
        comment: '웨이브 키',
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_6',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_pk',
        using: 'btree',
        unique: true,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_1',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_2',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_3',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_4',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_5',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_7',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_8',
        using: 'btree',
        unique: false,
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "wave_no", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BIGINT,
        comment: '웨이브 시작 시간',
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_6',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_1',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_2',
        using: 'btree',
        unique: false,
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "wave_dt_start", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BIGINT,
        comment: '웨이브 종료 시간',
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_6',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_1',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_2',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_3',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_4',
        using: 'btree',
        unique: false,
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "wave_dt_end", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(30),
        comment: '웨이브 종류\nWAVE_TP_1000 : 선착순\nWAVE_TP_1101 : 일반번호 조합순서 [웨이브 시간 안에 많이 적립]\nWAVE_TP_1201 : 황금번호 조합순서 [웨이브 시간 안에 많이 적립]\nWAVE_TP_1301 : 잔액순서\nWAVE_TP_1401 : 구매금액 큰 순\n\nWAVE_TP_2101 : 일반번호 조합순서 [직접 입력]\nWAVE_TP_2201 : 황금번호 조합순서 [직접 입력]\nWAVE_TP_2301 : 잔액 [직접 입력]\n\nWAVE_TP_3101 : 유닛 제작 금액 [FT 놓은순 -> 작위 높은순 -> SuperX 레벨 총합 높은순 -> 선착순]\n',
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "wave_tp_cd_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(30),
        comment: '웨이브 종류\nWAVE_TP_SUB_0001 : SV 유닛\nWAVE_TP_SUB_0100 : 디지털 유닛',
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "wave_tp_sub_cd_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(30),
        comment: '웨이브 결과 코드\nWAVE_RES_000 : 집계중(기본)\nWAVE_RES_001 ~ WAVE_RES_099 : 집계중(배치 시스템 가동)\nWAVE_RES_100 : 예상 결과 발표(기본)\nWAVE_RES_101 ~ WAVE_RES_199 : 예상 결과 발표(배치 시스템 가동)\nWAVE_RES_200 : 최종 결과 발표\n',
        defaultValue: sequelize_typescript_1.Sequelize.literal("'WAVE_RES_000'::character varying"),
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_4',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_5',
        using: 'btree',
        unique: false,
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "wave_result_cd_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(100),
        comment: '상품명',
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "prod_nm", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: '제작가',
    }),
    __metadata("design:type", Number)
], tb_wave.prototype, "prod_amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: '실제 제작가(할인전)',
    }),
    __metadata("design:type", Number)
], tb_wave.prototype, "prod_amount_real", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: '제품당 CEV',
    }),
    __metadata("design:type", Number)
], tb_wave.prototype, "prod_amount_cev", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BIGINT,
        comment: '발급된 패스권 수',
        defaultValue: sequelize_typescript_1.Sequelize.literal('0'),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "pass_vook_cnt_issue", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BIGINT,
        comment: '확정 패스권 수(실제 결제)',
        defaultValue: sequelize_typescript_1.Sequelize.literal('0'),
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_8',
        using: 'btree',
        unique: false,
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "pass_vook_cnt_buy", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BIGINT,
        comment: '최대 확정 패스권 수',
        defaultValue: sequelize_typescript_1.Sequelize.literal("'9999999999'::bigint"),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "pass_vook_cnt_max", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BIGINT,
        comment: '조회 수',
        defaultValue: sequelize_typescript_1.Sequelize.literal('0'),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "view_cnt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(1),
        comment: '보장금 존재 여부',
        defaultValue: sequelize_typescript_1.Sequelize.literal("'N'::character varying"),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "wip_yn", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: '패스권 한장당 보장금',
        defaultValue: sequelize_typescript_1.Sequelize.literal('0'),
    }),
    __metadata("design:type", Number)
], tb_wave.prototype, "wip_amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: sequelize_typescript_1.Sequelize.literal('0'),
    }),
    __metadata("design:type", Number)
], tb_wave.prototype, "wave_amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.DECIMAL(8, 4),
        defaultValue: sequelize_typescript_1.Sequelize.literal('100.0000'),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "wave_amount_rate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.DECIMAL(7, 4),
        comment: '분배 상수',
        defaultValue: sequelize_typescript_1.Sequelize.literal('10.0000'),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "wave_calc_value", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.JSONB,
        comment: '이미지 정보',
    }),
    __metadata("design:type", Object)
], tb_wave.prototype, "img_info", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(1),
        comment: '예고일때 제작 가능 여부',
        defaultValue: sequelize_typescript_1.Sequelize.literal("'N'::character varying"),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "buy_yn_before", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.JSONB,
        comment: '디지털 유닛이면 유닛 리스트, pb 상품이면 빈값',
    }),
    __metadata("design:type", Object)
], tb_wave.prototype, "product_uid_info", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(500),
        comment: '이동할 웹사이트. 만약 디지털 유닛이면 빈값',
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "lending_url", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(30),
        comment: '\nWEB_EXTERNAL : 외부 크롬\nWEB_INTERNAL : 앱 내부 웹사이트\nDIGITAL : 내 디지털 유닛 이동\nPOPUP : 팝업 안내\n',
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "lending_tp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(1000),
        comment: '규칙',
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "rule_desc_1", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(1000),
        comment: '규칙',
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "rule_desc_2", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: '예고일 때 상품 수',
    }),
    __metadata("design:type", Number)
], tb_wave.prototype, "tmp_cnt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: sequelize_typescript_1.Sequelize.literal('0'),
    }),
    __metadata("design:type", Number)
], tb_wave.prototype, "mod_cnt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: sequelize_typescript_1.Sequelize.literal('0'),
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_8',
        using: 'btree',
        unique: false,
    }),
    __metadata("design:type", Number)
], tb_wave.prototype, "mod_cnt_max", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(1),
        defaultValue: sequelize_typescript_1.Sequelize.literal("'N'::character varying"),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "mod_finish_yn", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BIGINT,
        comment: '예상 총 CEV 값',
        defaultValue: sequelize_typescript_1.Sequelize.literal('0'),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "total_cev_tmp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BIGINT,
        comment: '예상 총 IEV 값',
        defaultValue: sequelize_typescript_1.Sequelize.literal('0'),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "total_iev_tmp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BIGINT,
        comment: '최종 총 CEV 값',
        defaultValue: sequelize_typescript_1.Sequelize.literal('0'),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "total_cev", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BIGINT,
        comment: '최종 총 IEV 값',
        defaultValue: sequelize_typescript_1.Sequelize.literal('0'),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "total_iev", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(1),
        defaultValue: sequelize_typescript_1.Sequelize.literal("'R'::character varying"),
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_6',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_1',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_2',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_3',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_4',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_5',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_7',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_8',
        using: 'btree',
        unique: false,
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "use_yn", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(1),
        comment: '웨이브 성공 여부',
        defaultValue: sequelize_typescript_1.Sequelize.literal("'N'::character varying"),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "wave_success_yn", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BIGINT,
        defaultValue: sequelize_typescript_1.Sequelize.literal("(floor(date_part('epoch'::text, now())))::bigint"),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "reg_dt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BIGINT,
        defaultValue: sequelize_typescript_1.Sequelize.literal("(floor(date_part('EPOCH'::text, now())))::bigint"),
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_5',
        using: 'btree',
        unique: false,
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "up_dt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(30),
        comment: 'tb_unit_meta 고유 키',
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_6',
        using: 'btree',
        unique: false,
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "unit_meta_no", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], tb_wave.prototype, "f_1", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], tb_wave.prototype, "f_2", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(30),
        comment: 'unit_meta_no 의 그룹값\n운영중 A, B 등이 추가되면서 같은 유닛으로 묶을 값이 필요해짐.',
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_7',
        using: 'btree',
        unique: false,
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_8',
        using: 'btree',
        unique: false,
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "unit_meta_no_main", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: '배송 그룹 번호\n같은 그룹내에 mod_cnt 값이 mod_cnt_max 와 동일해지면\n+1 해준다.',
        defaultValue: sequelize_typescript_1.Sequelize.literal('1'),
    }),
    (0, sequelize_typescript_1.Index)({
        name: 'tb_wave_idx_8',
        using: 'btree',
        unique: false,
    }),
    __metadata("design:type", Number)
], tb_wave.prototype, "mod_grp_no", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(1),
        comment: 'mod_cnt 가 max 값까지 되어서 반영 되었는지 여부',
        defaultValue: sequelize_typescript_1.Sequelize.literal("'N'::character varying"),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "mod_cnt_yn", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(1),
        comment: '퀴즈 여부',
        defaultValue: sequelize_typescript_1.Sequelize.literal("'N'::character varying"),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "quiz_yn", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(30),
        comment: '퀴즈 종류 코드\nWAVE_QUIZ_000000 : 퀴즈 아님\nWAVE_QUIZ_A00001 : 산수 퀴즈\n...\n',
        defaultValue: sequelize_typescript_1.Sequelize.literal("'WAVE_QUIZ_000000'::character varying"),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "quiz_tp_cd_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: '유저별 웨이브당 패스권 최대 발행 가능 갯수\n0 이면 무한대\n1 이상부터 해당 웨이브에서는 이 패스권 갯수만큼만 발행 가능',
        defaultValue: sequelize_typescript_1.Sequelize.literal('0'),
    }),
    __metadata("design:type", Number)
], tb_wave.prototype, "user_max_issue", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(1),
        comment: '웨이브 확정 결과 시 유저 정보 공개 여부',
        defaultValue: sequelize_typescript_1.Sequelize.literal("'N'::character varying"),
    }),
    __metadata("design:type", String)
], tb_wave.prototype, "user_info_open_yn", void 0);
exports.tb_wave = tb_wave = __decorate([
    (0, sequelize_typescript_1.Table)({
        schema: 'salesvook',
        tableName: 'tb_wave',
        timestamps: false,
        comment: '웨이브 테이블',
    })
], tb_wave);
//# sourceMappingURL=tb_wave.js.map