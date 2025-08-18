import { Player } from '../models/player'

/**
 * Interface for a player repository.
 * This interface defines the methods for interacting with player data.
 */
export interface PlayerRepository {
  /**
   * Creates a new player.
   * @param player The player object to create.
   * @returns A promise that resolves to the created Player object.
   */
  create(player: Player): Promise<Player>

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

  /**
   * Updates an existing player.
   * @param id The ID of the player to update.
   * @param player The updated player object.
   * @returns A promise that resolves to the updated Player object.
   */
  update(id: string, player: Player): Promise<Player>

  /**
   * Deletes a player by their ID.
   * @param id The ID of the player to delete.
   * @returns A promise that resolves to the deleted Player object.
   */
  delete(id: string): Promise<Player>
}
