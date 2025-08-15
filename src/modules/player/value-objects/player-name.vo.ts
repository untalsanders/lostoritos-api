export class PlayerName {
  private readonly first: string
  private readonly last: string

  constructor(first: string, last: string) {
    if (!first || first.trim().length < 3) {
      throw new Error('Player firstname must have at least 3 characters.')
    }

    if (!last || last.trim().length < 3) {
      throw new Error('Player lastname must have at least 3 characters.')
    }

    this.first = first
    this.last = last
  }

  get firstname(): string {
    return this.first
  }

  get lastname(): string {
    return this.last
  }

  equals(other: PlayerName): boolean {
    return this.first === other.first && this.last === other.last
  }
}
