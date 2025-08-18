import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'
import { CreatePlayerDto } from '../dtos/create-player.dto'
import { Player } from '../models/player'
import { PlayerService } from '../services/player.service'
import { PlayerName } from '../value-objects/player-name.vo'
import { PlayerPhone } from '../value-objects/player-phone.vo'

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  getAllPlayers() {
    return this.playerService.retrievePlayers()
  }

  @Get(':id')
  getPlayer(@Param('id') id: string) {
    return this.playerService.retrievPlayerById(id)
  }

  @Post()
  async createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    const { firstname, lastname, phoneNumber } = createPlayerDto
    const playerName = new PlayerName(firstname, lastname)
    const playerPhone = new PlayerPhone(phoneNumber)
    const player = new Player(uuidv4(), playerName, playerPhone)
    return await this.playerService.createPlayer(player)
  }
}
