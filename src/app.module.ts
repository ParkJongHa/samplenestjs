import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './prac002_db/database/database.module';
import { WaveModule } from './prac002_db/wave/wave.module';
import { AuthModule } from './c04_security/s01_authentication/auth/auth.module';
import { UsersModule } from './c04_security/s01_authentication/users/users.module';

const envTarget = 'test';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${envTarget}`],
    }),
    DatabaseModule,
    WaveModule,
    AuthModule,
    UsersModule,
  ],
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: AuthGuard,
  //   },
  // ],
})
export class AppModule {}
