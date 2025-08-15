import { Controller, Get } from '@nestjs/common'
import { Player } from '../entities/player'
import { PlayerService } from '../services/player.service'

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('ping')
  ping(): string {
    return 'pong'
  }

  @Get()
  async getAllPlayers(): Promise<Player[]> {
    return await this.playerService.getPlayers()
  }
}
