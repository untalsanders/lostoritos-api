import { Module } from '@nestjs/common'
import { PlayersModule } from './players/players.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    PlayersModule,
  ],
})
export class AppModule {}
