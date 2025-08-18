import { Player } from '../models/player'

export interface UpdatePlayerUseCase {
  updatePlayer(id: string, player: Player): Promise<Player>
}
