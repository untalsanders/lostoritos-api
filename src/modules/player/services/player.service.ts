import { Injectable } from '@nestjs/common'
import { Player } from '../entities/player'
import { RetrievePlayerUseCase } from '../use-cases/retrieve-player.use-case'
import { playerList } from '../utils/player.mock'

@Injectable()
export class PlayerService implements RetrievePlayerUseCase {
  async getPlayers(): Promise<Player[]> {
    return await playerList()
  }
}
