import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PlayerEntity } from '../entities/player.entity'
import { Player } from '../models/player'
import { TypeOrmPlayerRepository } from '../repositories/typeorm-player.repository'
import { CreatePlayerUseCase } from '../use-cases/create-player.use-case'
import { DeletePlayerUseCase } from '../use-cases/delete-player.use-case'
import { RetrievePlayerUseCase } from '../use-cases/retrieve-player.use-case'
import { UpdatePlayerUseCase } from '../use-cases/update-player.use-case'
import { PlayerName } from '../value-objects/player-name.vo'
import { PlayerPhone } from '../value-objects/player-phone.vo'

@Injectable()
export class PlayerService
  implements
    CreatePlayerUseCase,
    RetrievePlayerUseCase,
    UpdatePlayerUseCase,
    DeletePlayerUseCase
{
  constructor(
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: TypeOrmPlayerRepository,
  ) {}

  async createPlayer(player: Player): Promise<Player> {
    // return await this.playerRepository.create(player)
    throw new Error()
  }

  async retrievePlayers(): Promise<Player[]> {
    return (await this.playerRepository.find()).map(p => {
      const playerName = new PlayerName(p.firstName, p.lastName)
      const playerPhone = new PlayerPhone(p.phoneNumber)
      return new Player(p.id, playerName, playerPhone)
    })
  }

  async retrievPlayerById(id: string): Promise<Player> {
    const playerFound = await this.playerRepository.findOneBy({ id })
    if (!playerFound) {
      throw new Error(`Player with ID ${id} not found.`)
    }
    const { id: playerId, firstName, lastName, phoneNumber } = playerFound
    const playerName = new PlayerName(firstName, lastName)
    const playerPhone = new PlayerPhone(phoneNumber)
    return new Player(playerId, playerName, playerPhone)
  }

  async updatePlayer(id: string, player: Player): Promise<Player> {
    throw new Error('Method not implemented.')
  }

  async deletePlayer(id: string): Promise<Player> {
    throw new Error('Method not implemented.')
  }
}
