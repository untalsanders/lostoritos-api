import { Player } from '../entities/player'

export interface RetrievePlayerUseCase {
  getPlayers(): Promise<Player[]>
}
