export class PlayerPhone {
  private readonly value: string

  constructor(value: string) {
    const phoneRegex = /^\+?[0-9]{10,}$/
    if (!phoneRegex.test(value)) {
      throw new Error(
        'Invalid phone number format. Must be at least 15 digits.',
      )
    }
    this.value = value
  }

  get phone(): string {
    return this.value
  }

  equals(other: PlayerPhone): boolean {
    return this.value === other.value
  }
}
