import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Player } from '../entities/player'
import { PlayerService } from '../services/player.service'
import { CreatePlayerDto } from '../dtos/create-player.dto'
import { PlayerName } from '../value-objects/player-name.vo'
import { PlayerPhone } from '../value-objects/player-phone.vo'

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  async getAllPlayers() {
    return await this.playerService.retrievePlayers()
  }

  @Get(':id')
  async getPlayer(@Param('id') id: string): Promise<Player> {
    return await this.playerService.retrievPlayerById(id)
  }

  @Post()
  async createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    const playerName = new PlayerName(
      createPlayerDto.firstname,
      createPlayerDto.lastname,
    )
    const playerPhone = new PlayerPhone(createPlayerDto.phoneNumber)
    const player = new Player(playerName, playerPhone)
    return await this.playerService.createPlayer(player)
  }
}
