import { Injectable } from '@nestjs/common'
import { Player } from '../entities/player'
import { LocalPlayerRepository } from '../repositories/local-player.repository'
import { CreatePlayerUseCase } from '../use-cases/create-player.use-case'
import { DeletePlayerUseCase } from '../use-cases/delete-player.use-case'
import { RetrievePlayerUseCase } from '../use-cases/retrieve-player.use-case'
import { UpdatePlayerUseCase } from '../use-cases/update-player.use-case'

@Injectable()
export class PlayerService
  implements
    CreatePlayerUseCase,
    RetrievePlayerUseCase,
    UpdatePlayerUseCase,
    DeletePlayerUseCase
{
  constructor(private readonly playerRepository: LocalPlayerRepository) {}

  async createPlayer(player: Player): Promise<Player> {
    return await this.playerRepository.create(player)
  }

  async retrievePlayers(): Promise<Player[]> {
    return await this.playerRepository.findAll()
  }

  async retrievPlayerById(id: string): Promise<Player> {
    return await this.playerRepository.findById(id)
  }

  async updatePlayer(id: string, player: Player): Promise<Player> {
    throw new Error('Method not implemented.')
  }

  async deletePlayer(id: string): Promise<Player> {
    throw new Error('Method not implemented.')
  }
}
