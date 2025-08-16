import { Injectable } from '@nestjs/common'
import { Player } from '../entities/player'
import { readMockPlayerList } from '../utils/player.mock'
import { PlayerRepository } from './player.repository'

@Injectable()
export class LocalPlayerRepository implements PlayerRepository {
  constructor() {}

  async findAll(): Promise<Player[]> {
    return LocalPlayerRepository.getPlayerList()
  }

  async findById(id: string): Promise<Player> {
    const playerList = await LocalPlayerRepository.getPlayerList()
    const player = playerList.find(player => player.id == id)
    if (!player) {
      throw new Error(`Player with ID "${id}" not found.`)
    }
    return player
  }

  private static async getPlayerList(): Promise<Player[]> {
    return await readMockPlayerList()
  }
}
