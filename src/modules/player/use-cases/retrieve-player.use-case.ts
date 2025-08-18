import { Player } from '../models/player'

export interface RetrievePlayerUseCase {
  retrievePlayers(): Promise<Player[]>
  retrievPlayerById(id: string): Promise<Player>
}
