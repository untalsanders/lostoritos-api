import { Module } from '@nestjs/common'
import { PlayerModule } from './modules/player/player.module'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    PlayerModule,
  ],
  controllers: [AppController]
})
export class AppModule {}
