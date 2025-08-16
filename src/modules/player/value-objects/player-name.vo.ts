export class PlayerName {
  private readonly _first: string
  private readonly _last: string

  constructor(first: string, last: string) {
    if (!first || first.trim().length < 3) {
      throw new Error('Player firstname must have at least 3 characters.')
    }

    if (!last || last.trim().length < 3) {
      throw new Error('Player lastname must have at least 3 characters.')
    }

    this._first = first
    this._last = last
  }

  get first(): string {
    return this._first
  }

  get last(): string {
    return this._last
  }

  equals(other: PlayerName): boolean {
    return this._first === other._first && this._last === other._last
  }
}
