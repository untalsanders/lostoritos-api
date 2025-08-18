import { Player } from '../entities/player'

export interface UpdatePlayerUseCase {
  updatePlayer(id: string, player: Player): Promise<Player>
}
