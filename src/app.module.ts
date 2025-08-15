import { Module } from '@nestjs/common'
import { PlayerModule } from './modules/player/player.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    PlayerModule,
  ],
})
export class AppModule {}
