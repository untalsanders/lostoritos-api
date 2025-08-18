import { Player } from '../models/player'

export interface CreatePlayerUseCase {
  createPlayer(player: Player): Promise<Player>
}
