import { Player } from '../entities/player'

export interface DeletePlayerUseCase {
  deletePlayer(id: string): Promise<Player>
}
