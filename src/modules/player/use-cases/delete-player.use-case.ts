import { Player } from '../models/player'

export interface DeletePlayerUseCase {
  deletePlayer(id: string): Promise<Player>
}
