import { Sequelize } from 'sequelize-typescript';
import { tb_wave } from '../entity/tb_wave';

export const databaseProviders = [
  {
    provide: 'SEQUALIZE',
    useFactory: async () => {
      // console.log(`------------------------------`);
      // console.log(`${JSON.stringify(process.env.DB_TARGET)}`);
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      });
      sequelize.addModels([tb_wave]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
