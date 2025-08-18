import { Player } from '../entities/player'

export interface CreatePlayerUseCase {
  createPlayer(player: Player): Promise<Player>
}
