import { Controller, Get, Param } from '@nestjs/common'
import { Player } from '../entities/player'
import { PlayerService } from '../services/player.service'
import { writeMockPlayerList } from '@/modules/player/utils/player.mock'

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('ping')
  ping(): string {
    writeMockPlayerList()
    return 'pong'
  }

  @Get()
  async getAllPlayers(): Promise<Player[]> {
    return await this.playerService.getPlayers()
  }

  @Get(':id')
  async getPlayer(@Param('id') id: string): Promise<Player> {
    return await this.playerService.getPlayerById(id)
  }
}
