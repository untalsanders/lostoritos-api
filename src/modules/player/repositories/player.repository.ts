import { Player } from '../entities/player'

export interface PlayerRepository {
  /**
   * Finds all players.
   * @returns A promise that resolves to an array of Player objects.
   */
  findAll(): Promise<Player[]>

  /**
   * Finds a player by their ID.
   * @param id The ID of the player to find.
   * @returns A promise that resolves to a Player object if found, otherwise null.
   */
  findById(id: string): Promise<Player>
}
