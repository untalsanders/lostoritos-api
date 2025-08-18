import { Injectable } from '@nestjs/common'
import { Player } from '../entities/player'
import { readMockPlayerList } from '../utils/player.mock'
import { PlayerRepository } from './player.repository'

@Injectable()
export class LocalPlayerRepository implements PlayerRepository {

  private playerList: Player[]

  async create(player: Player): Promise<Player> {
    this.playerList = await LocalPlayerRepository.getPlayerList()
    console.log(player)
    this.playerList.push(player)
    return player
  }

  async findAll(): Promise<Player[]> {
    return await LocalPlayerRepository.getPlayerList()
  }

  async findById(id: string): Promise<Player> {
    const playerList = await LocalPlayerRepository.getPlayerList()
    const player = playerList.find(player => player.id == id)
    if (!player) {
      throw new Error(`Player with ID "${id}" not found.`)
    }
    return player
  }

  update(id: string, player: Player): Promise<Player> {
    throw new Error('Method not implemented.')
  }

  delete(id: string): Promise<Player> {
    const playerToRemove = this.findById(id)
    return playerToRemove
  }

  private static async getPlayerList(): Promise<Player[]> {
    return await readMockPlayerList()
  }
}
