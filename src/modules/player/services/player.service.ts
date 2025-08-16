import { Injectable } from '@nestjs/common'
import { Player } from '../entities/player'
import { LocalPlayerRepository } from '../repositories/local-player.repository'
import { RetrievePlayerUseCase } from '../use-cases/retrieve-player.use-case'

@Injectable()
export class PlayerService implements RetrievePlayerUseCase {
  constructor(private readonly playerRepository: LocalPlayerRepository) {}

  async getPlayers(): Promise<Player[]> {
    return await this.playerRepository.findAll()
  }

  async getPlayerById(id: string): Promise<Player> {
    return await this.playerRepository.findById(id)
  }
}
