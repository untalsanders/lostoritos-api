import { Module } from '@nestjs/common'
import { PlayerController } from './controllers/player.controller'
import { PlayerService } from './services/player.service'
import { LocalPlayerRepository } from './repositories/local-player.repository'

@Module({
  controllers: [PlayerController],
  providers: [PlayerService, LocalPlayerRepository],
})
export class PlayerModule {}
