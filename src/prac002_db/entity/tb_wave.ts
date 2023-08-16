import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  // ForeignKey,
} from 'sequelize-typescript';

export interface tb_waveAttributes {
  wave_no: string;
  wave_dt_start?: string;
  wave_dt_end?: string;
  wave_tp_cd_id?: string;
  wave_tp_sub_cd_id?: string;
  wave_result_cd_id?: string;
  prod_nm?: string;
  prod_amount?: number;
  prod_amount_real?: number;
  prod_amount_cev?: number;
  pass_vook_cnt_issue?: string;
  pass_vook_cnt_buy?: string;
  pass_vook_cnt_max?: string;
  view_cnt?: string;
  wip_yn?: string;
  wip_amount?: number;
  wave_amount?: number;
  wave_amount_rate?: string;
  wave_calc_value?: string;
  img_info?: object;
  buy_yn_before?: string;
  product_uid_info?: object;
  lending_url?: string;
  lending_tp?: string;
  rule_desc_1?: string;
  rule_desc_2?: string;
  tmp_cnt?: number;
  mod_cnt?: number;
  mod_cnt_max?: number;
  mod_finish_yn?: string;
  total_cev_tmp?: string;
  total_iev_tmp?: string;
  total_cev?: string;
  total_iev?: string;
  use_yn?: string;
  wave_success_yn?: string;
  reg_dt?: string;
  up_dt?: string;
  unit_meta_no?: string;
  f_1?: number;
  f_2?: number;
  unit_meta_no_main?: string;
  mod_grp_no?: number;
  mod_cnt_yn?: string;
  quiz_yn?: string;
  quiz_tp_cd_id?: string;
  user_max_issue?: number;
  user_info_open_yn?: string;
}

@Table({
  schema: 'salesvook',
  tableName: 'tb_wave',
  timestamps: false,
  comment: '웨이브 테이블',
})
export class tb_wave
  extends Model<tb_waveAttributes, tb_waveAttributes>
  implements tb_waveAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.STRING(22),
    comment: '웨이브 키',
  })
  @Index({
    name: 'tb_wave_idx_6',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_pk',
    using: 'btree',
    unique: true,
  })
  @Index({
    name: 'tb_wave_idx_1',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_2',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_3',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_4',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_5',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_7',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_8',
    using: 'btree',
    unique: false,
  })
  wave_no!: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    comment: '웨이브 시작 시간',
  })
  @Index({
    name: 'tb_wave_idx_6',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_1',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_2',
    using: 'btree',
    unique: false,
  })
  wave_dt_start?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    comment: '웨이브 종료 시간',
  })
  @Index({
    name: 'tb_wave_idx_6',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_1',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_2',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_3',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_4',
    using: 'btree',
    unique: false,
  })
  wave_dt_end?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(30),
    comment:
      '웨이브 종류\nWAVE_TP_1000 : 선착순\nWAVE_TP_1101 : 일반번호 조합순서 [웨이브 시간 안에 많이 적립]\nWAVE_TP_1201 : 황금번호 조합순서 [웨이브 시간 안에 많이 적립]\nWAVE_TP_1301 : 잔액순서\nWAVE_TP_1401 : 구매금액 큰 순\n\nWAVE_TP_2101 : 일반번호 조합순서 [직접 입력]\nWAVE_TP_2201 : 황금번호 조합순서 [직접 입력]\nWAVE_TP_2301 : 잔액 [직접 입력]\n\nWAVE_TP_3101 : 유닛 제작 금액 [FT 놓은순 -> 작위 높은순 -> SuperX 레벨 총합 높은순 -> 선착순]\n',
  })
  wave_tp_cd_id?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(30),
    comment:
      '웨이브 종류\nWAVE_TP_SUB_0001 : SV 유닛\nWAVE_TP_SUB_0100 : 디지털 유닛',
  })
  wave_tp_sub_cd_id?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(30),
    comment:
      '웨이브 결과 코드\nWAVE_RES_000 : 집계중(기본)\nWAVE_RES_001 ~ WAVE_RES_099 : 집계중(배치 시스템 가동)\nWAVE_RES_100 : 예상 결과 발표(기본)\nWAVE_RES_101 ~ WAVE_RES_199 : 예상 결과 발표(배치 시스템 가동)\nWAVE_RES_200 : 최종 결과 발표\n',
    defaultValue: Sequelize.literal("'WAVE_RES_000'::character varying"),
  })
  @Index({
    name: 'tb_wave_idx_4',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_5',
    using: 'btree',
    unique: false,
  })
  wave_result_cd_id?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(100),
    comment: '상품명',
  })
  prod_nm?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    comment: '제작가',
  })
  prod_amount?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    comment: '실제 제작가(할인전)',
  })
  prod_amount_real?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    comment: '제품당 CEV',
  })
  prod_amount_cev?: number;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    comment: '발급된 패스권 수',
    defaultValue: Sequelize.literal('0'),
  })
  pass_vook_cnt_issue?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    comment: '확정 패스권 수(실제 결제)',
    defaultValue: Sequelize.literal('0'),
  })
  @Index({
    name: 'tb_wave_idx_8',
    using: 'btree',
    unique: false,
  })
  pass_vook_cnt_buy?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    comment: '최대 확정 패스권 수',
    defaultValue: Sequelize.literal("'9999999999'::bigint"),
  })
  pass_vook_cnt_max?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    comment: '조회 수',
    defaultValue: Sequelize.literal('0'),
  })
  view_cnt?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(1),
    comment: '보장금 존재 여부',
    defaultValue: Sequelize.literal("'N'::character varying"),
  })
  wip_yn?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    comment: '패스권 한장당 보장금',
    defaultValue: Sequelize.literal('0'),
  })
  wip_amount?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  wave_amount?: number;

  @Column({
    allowNull: true,
    type: DataType.DECIMAL(8, 4),
    defaultValue: Sequelize.literal('100.0000'),
  })
  wave_amount_rate?: string;

  @Column({
    allowNull: true,
    type: DataType.DECIMAL(7, 4),
    comment: '분배 상수',
    defaultValue: Sequelize.literal('10.0000'),
  })
  wave_calc_value?: string;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    comment: '이미지 정보',
  })
  img_info?: object;

  @Column({
    allowNull: true,
    type: DataType.STRING(1),
    comment: '예고일때 제작 가능 여부',
    defaultValue: Sequelize.literal("'N'::character varying"),
  })
  buy_yn_before?: string;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    comment: '디지털 유닛이면 유닛 리스트, pb 상품이면 빈값',
  })
  product_uid_info?: object;

  @Column({
    allowNull: true,
    type: DataType.STRING(500),
    comment: '이동할 웹사이트. 만약 디지털 유닛이면 빈값',
  })
  lending_url?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(30),
    comment:
      '\nWEB_EXTERNAL : 외부 크롬\nWEB_INTERNAL : 앱 내부 웹사이트\nDIGITAL : 내 디지털 유닛 이동\nPOPUP : 팝업 안내\n',
  })
  lending_tp?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(1000),
    comment: '규칙',
  })
  rule_desc_1?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(1000),
    comment: '규칙',
  })
  rule_desc_2?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    comment: '예고일 때 상품 수',
  })
  tmp_cnt?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  mod_cnt?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  @Index({
    name: 'tb_wave_idx_8',
    using: 'btree',
    unique: false,
  })
  mod_cnt_max?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING(1),
    defaultValue: Sequelize.literal("'N'::character varying"),
  })
  mod_finish_yn?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    comment: '예상 총 CEV 값',
    defaultValue: Sequelize.literal('0'),
  })
  total_cev_tmp?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    comment: '예상 총 IEV 값',
    defaultValue: Sequelize.literal('0'),
  })
  total_iev_tmp?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    comment: '최종 총 CEV 값',
    defaultValue: Sequelize.literal('0'),
  })
  total_cev?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    comment: '최종 총 IEV 값',
    defaultValue: Sequelize.literal('0'),
  })
  total_iev?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(1),
    defaultValue: Sequelize.literal("'R'::character varying"),
  })
  @Index({
    name: 'tb_wave_idx_6',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_1',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_2',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_3',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_4',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_5',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_7',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_8',
    using: 'btree',
    unique: false,
  })
  use_yn?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(1),
    comment: '웨이브 성공 여부',
    defaultValue: Sequelize.literal("'N'::character varying"),
  })
  wave_success_yn?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal(
      "(floor(date_part('epoch'::text, now())))::bigint",
    ),
  })
  reg_dt?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal(
      "(floor(date_part('EPOCH'::text, now())))::bigint",
    ),
  })
  @Index({
    name: 'tb_wave_idx_5',
    using: 'btree',
    unique: false,
  })
  up_dt?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(30),
    comment: 'tb_unit_meta 고유 키',
  })
  @Index({
    name: 'tb_wave_idx_6',
    using: 'btree',
    unique: false,
  })
  unit_meta_no?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  f_1?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  f_2?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING(30),
    comment:
      'unit_meta_no 의 그룹값\n운영중 A, B 등이 추가되면서 같은 유닛으로 묶을 값이 필요해짐.',
  })
  @Index({
    name: 'tb_wave_idx_7',
    using: 'btree',
    unique: false,
  })
  @Index({
    name: 'tb_wave_idx_8',
    using: 'btree',
    unique: false,
  })
  unit_meta_no_main?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    comment:
      '배송 그룹 번호\n같은 그룹내에 mod_cnt 값이 mod_cnt_max 와 동일해지면\n+1 해준다.',
    defaultValue: Sequelize.literal('1'),
  })
  @Index({
    name: 'tb_wave_idx_8',
    using: 'btree',
    unique: false,
  })
  mod_grp_no?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING(1),
    comment: 'mod_cnt 가 max 값까지 되어서 반영 되었는지 여부',
    defaultValue: Sequelize.literal("'N'::character varying"),
  })
  mod_cnt_yn?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(1),
    comment: '퀴즈 여부',
    defaultValue: Sequelize.literal("'N'::character varying"),
  })
  quiz_yn?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(30),
    comment:
      '퀴즈 종류 코드\nWAVE_QUIZ_000000 : 퀴즈 아님\nWAVE_QUIZ_A00001 : 산수 퀴즈\n...\n',
    defaultValue: Sequelize.literal("'WAVE_QUIZ_000000'::character varying"),
  })
  quiz_tp_cd_id?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    comment:
      '유저별 웨이브당 패스권 최대 발행 가능 갯수\n0 이면 무한대\n1 이상부터 해당 웨이브에서는 이 패스권 갯수만큼만 발행 가능',
    defaultValue: Sequelize.literal('0'),
  })
  user_max_issue?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING(1),
    comment: '웨이브 확정 결과 시 유저 정보 공개 여부',
    defaultValue: Sequelize.literal("'N'::character varying"),
  })
  user_info_open_yn?: string;
}
